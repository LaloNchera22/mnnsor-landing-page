"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import * as THREE from "three"

/**
 * Lava Lamp — blobs of wax rising, merging and falling, raymarched.
 */

const MAX_BLOBS = 20
const CAM_Z = 2.4
const RAY_FOCAL = 1.4

const DEFAULTS = {
    top: "#FFFE00",
    bottom: "#13BB00",
    sheen: "#FFF400",
    blobs: 20,
    scale: 5,
    viscosity: 5,
    speed: 20,
    glow: 20,
    gloss: 20,
    wander: 10,
    magnet: 20,
    sizePercent: 75,
}

type Config = {
    top: string
    bottom: string
    sheen: string
    blobs: number
    scale: number
    viscosity: number
    speed: number
    glow: number
    gloss: number
    wander: number
    magnet: number
    sizePercent: number
}

function clamp(v: number, lo: number, hi: number, fallback: number): number {
    const n = typeof v === "number" && isFinite(v) ? v : fallback
    return Math.max(lo, Math.min(hi, n))
}

function settingsFor(cfg: Config) {
    return {
        blobs: Math.round(clamp(cfg.blobs, 1, MAX_BLOBS, DEFAULTS.blobs)),
        scale: 0.12 + clamp(cfg.scale, 1, 20, DEFAULTS.scale) * 0.022,
        viscosity: 0.05 + clamp(cfg.viscosity, 1, 20, DEFAULTS.viscosity) * 0.035,
        speed: clamp(cfg.speed, 0, 20, DEFAULTS.speed) * 0.075,
        glow: 0.3 + clamp(cfg.glow, 0, 20, DEFAULTS.glow) * 0.06,
        gloss: 8 + clamp(cfg.gloss, 1, 20, DEFAULTS.gloss) * 5,
        wander: clamp(cfg.wander, 0, 20, DEFAULTS.wander) * 0.035,
        magnet: clamp(cfg.magnet, 0, 20, DEFAULTS.magnet) * 0.028,
        zoom: 100 / clamp(cfg.sizePercent, 20, 200, 100),
    }
}

const QUAD_VERTEX = /* glsl */ `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
    }
`

const LAVA_FRAGMENT = /* glsl */ `
    precision highp float;

    #define MAX_BLOBS ${MAX_BLOBS}

    uniform vec2 uResolution;
    uniform vec3 uTop;
    uniform vec3 uBottom;
    uniform vec3 uSheen;
    uniform float uTime;
    uniform float uCount;
    uniform float uScale;
    uniform float uViscosity;
    uniform float uGlow;
    uniform float uGloss;
    uniform float uWander;
    uniform float uZoom;
    uniform vec2 uPointer;
    uniform float uMagnet;

    varying vec2 vUv;

    float smin(float a, float b, float k) {
        float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
        return mix(b, a, h) - k * h * (1.0 - h);
    }

    vec4 blob(int i) {
        float f = float(i);
        float rate = 0.5 + fract(f * 0.37) * 0.6;
        float phase = f * 2.399;
        float y = sin(uTime * rate + phase) * 0.62;
        float x = sin(uTime * rate * 0.61 + phase * 1.7) * uWander;
        float z = cos(uTime * rate * 0.43 + phase * 2.3) * uWander;
        float r = uScale * (0.75 + fract(f * 0.71) * 0.6);

        vec2 toPointer = uPointer - vec2(x, y);
        float grip = exp(-dot(toPointer, toPointer) * 2.2);
        float give = uMagnet * grip * (1.3 - r * 1.4);
        vec2 pulled = vec2(x, y) + toPointer * give;

        return vec4(pulled, z, r);
    }

    float map(vec3 p) {
        float d = 1e9;
        for (int i = 0; i < MAX_BLOBS; i++) {
            if (float(i) < uCount) {
                vec4 b = blob(i);
                float squash = 1.0 + 0.22 * sin(uTime * (0.5 + fract(float(i) * 0.37) * 0.6) + float(i) * 2.399);
                vec3 q = p - b.xyz;
                q.y /= squash;
                d = smin(d, length(q) - b.w, uViscosity);
            }
        }
        return d;
    }

    vec3 normalAt(vec3 p) {
        vec2 e = vec2(0.0015, 0.0);
        return normalize(vec3(
            map(p + e.xyy) - map(p - e.xyy),
            map(p + e.yxy) - map(p - e.yxy),
            map(p + e.yyx) - map(p - e.yyx)
        ));
    }

    void main() {
        vec2 uv = (vUv - 0.5) * uZoom;
        uv.x *= uResolution.x / max(1.0, uResolution.y);

        vec3 ro = vec3(0.0, 0.0, ${CAM_Z.toFixed(3)});
        vec3 rd = normalize(vec3(uv, -${RAY_FOCAL.toFixed(3)}));

        float t = 0.0;
        float hit = 0.0;
        for (int i = 0; i < 72; i++) {
            vec3 p = ro + rd * t;
            float d = map(p);
            if (d < 0.001) { hit = 1.0; break; }
            t += d * 0.9;
            if (t > 5.0) break;
        }

        if (hit < 0.5) discard;

        vec3 p = ro + rd * t;
        vec3 n = normalAt(p);
        vec3 v = -rd;

        float h = clamp(p.y * 0.9 + 0.5, 0.0, 1.0);
        vec3 col = mix(uBottom, uTop, h);

        vec3 L = normalize(vec3(-0.4, 0.7, 0.8));
        float diff = max(dot(n, L), 0.0);
        float wrap = 0.5 + 0.5 * dot(n, L);
        col *= 0.35 + diff * 0.6 + wrap * 0.25;

        float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);
        col += mix(uBottom, uTop, h) * fres * uGlow;

        vec3 hv = normalize(L + v);
        col += uSheen * pow(max(dot(n, hv), 0.0), uGloss) * 0.6;

        gl_FragColor = vec4(col, 1.0);
    }
`

class LavaScene {
    private container: HTMLElement
    private cfg: Config

    private renderer: THREE.WebGLRenderer
    private scene = new THREE.Scene()
    private camera = new THREE.Camera()
    private geometry = new THREE.PlaneGeometry(2, 2)
    private material: THREE.ShaderMaterial
    private mesh: THREE.Mesh

    private pointer = new THREE.Vector2(0, 0)
    private pointerTarget = new THREE.Vector2(0, 0)
    private grip = 0
    private gripTarget = 0
    private time = 0
    private frameId = 0
    private lastT = 0
    private disposed = false

    constructor(container: HTMLElement, cfg: Config) {
        this.container = container
        this.cfg = cfg
        const S = settingsFor(cfg)

        this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true })
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
        this.renderer.outputColorSpace = THREE.SRGBColorSpace
        this.renderer.setClearColor(0x000000, 0)
        const el = this.renderer.domElement
        el.style.position = "absolute"
        el.style.inset = "0"
        el.style.width = "100%"
        el.style.height = "100%"
        container.appendChild(el)

        this.material = new THREE.ShaderMaterial({
            vertexShader: QUAD_VERTEX,
            fragmentShader: LAVA_FRAGMENT,
            uniforms: {
                uResolution: { value: new THREE.Vector2(1, 1) },
                uTop: { value: new THREE.Color(cfg.top) },
                uBottom: { value: new THREE.Color(cfg.bottom) },
                uSheen: { value: new THREE.Color(cfg.sheen) },
                uTime: { value: 0 },
                uCount: { value: S.blobs },
                uScale: { value: S.scale },
                uViscosity: { value: S.viscosity },
                uGlow: { value: S.glow },
                uGloss: { value: S.gloss },
                uWander: { value: S.wander },
                uZoom: { value: S.zoom },
                uPointer: { value: new THREE.Vector2(0, 0) },
                uMagnet: { value: 0 },
            },
            transparent: true,
            depthTest: false,
            depthWrite: false,
        })

        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.frustumCulled = false
        this.scene.add(this.mesh)
        this.bindEvents()
    }

    private toField(e: PointerEvent): THREE.Vector2 | null {
        const el = this.renderer.domElement
        const rect = el.getBoundingClientRect()
        if (rect.width <= 0 || rect.height <= 0) return null
        const aspect = rect.width / rect.height
        const zoom = settingsFor(this.cfg).zoom
        const vx = (e.clientX - rect.left) / rect.width
        const vy = 1 - (e.clientY - rect.top) / rect.height
        const k = CAM_Z / RAY_FOCAL
        return new THREE.Vector2(
            (vx - 0.5) * zoom * aspect * k,
            (vy - 0.5) * zoom * k
        )
    }

    private bindEvents() {
        const el = this.renderer.domElement
        el.style.touchAction = "none"

        const move = (e: PointerEvent) => {
            const p = this.toField(e)
            if (!p) return
            this.pointerTarget.copy(p)
            this.gripTarget = 1
        }
        const leave = () => {
            this.gripTarget = 0
        }

        el.addEventListener("pointermove", move)
        el.addEventListener("pointerenter", move)
        el.addEventListener("pointerleave", leave)
        el.addEventListener("pointercancel", leave)
        this.unbind = () => {
            el.removeEventListener("pointermove", move)
            el.removeEventListener("pointerenter", move)
            el.removeEventListener("pointerleave", leave)
            el.removeEventListener("pointercancel", leave)
        }
    }

    private unbind = () => {}

    start() {
        this.lastT = performance.now()
        const loop = () => {
            this.frameId = requestAnimationFrame(loop)
            this.step()
        }
        loop()
    }

    setSize(width: number, height: number) {
        if (this.disposed || width <= 0 || height <= 0) return
        this.renderer.setSize(width, height, false)
        this.material.uniforms.uResolution.value.set(width, height)
    }

    updateConfig(cfg: Config) {
        if (this.disposed) return
        this.cfg = cfg
        const S = settingsFor(cfg)
        const u = this.material.uniforms
        u.uTop.value.set(cfg.top || "#ffffff")
        u.uBottom.value.set(cfg.bottom || "#ffffff")
        u.uSheen.value.set(cfg.sheen || "#ffffff")
        u.uCount.value = S.blobs
        u.uScale.value = S.scale
        u.uViscosity.value = S.viscosity
        u.uGlow.value = S.glow
        u.uGloss.value = S.gloss
        u.uWander.value = S.wander
        u.uZoom.value = S.zoom
    }

    private step() {
        if (this.disposed) return
        const now = performance.now()
        let dt = (now - this.lastT) / 1000
        this.lastT = now
        if (!isFinite(dt) || dt < 0) dt = 0
        if (dt > 0.05) dt = 0.05

        const S = settingsFor(this.cfg)
        this.time += dt * S.speed

        this.grip += (this.gripTarget - this.grip) * (1 - Math.exp(-dt * 4.0))
        this.pointer.lerp(this.pointerTarget, 1 - Math.exp(-dt * 9.0))

        const u = this.material.uniforms
        u.uTime.value = this.time
        u.uPointer.value.copy(this.pointer)
        u.uMagnet.value = S.magnet * this.grip
        this.renderer.render(this.scene, this.camera)
    }

    dispose() {
        this.disposed = true
        cancelAnimationFrame(this.frameId)
        this.unbind()
        this.geometry.dispose()
        this.material.dispose()
        this.renderer.dispose()
        const el = this.renderer.domElement
        if (el.parentNode === this.container) this.container.removeChild(el)
    }
}

export interface LavaLampProps {
    top?: string
    bottom?: string
    sheen?: string
    blobs?: number
    scale?: number
    viscosity?: number
    speed?: number
    glow?: number
    gloss?: number
    wander?: number
    magnet?: number
    sizePercent?: number
    style?: React.CSSProperties
    className?: string
}

function OriginkitBase_LavaLamp(props: LavaLampProps) {
    const {
        top = DEFAULTS.top,
        bottom = DEFAULTS.bottom,
        sheen = DEFAULTS.sheen,
        blobs = DEFAULTS.blobs,
        scale = DEFAULTS.scale,
        viscosity = DEFAULTS.viscosity,
        speed = DEFAULTS.speed,
        glow = DEFAULTS.glow,
        gloss = DEFAULTS.gloss,
        wander = DEFAULTS.wander,
        magnet = DEFAULTS.magnet,
        sizePercent = DEFAULTS.sizePercent,
        style,
        className,
    } = props

    const containerRef = useRef<HTMLDivElement | null>(null)
    const sceneRef = useRef<LavaScene | null>(null)

    const cfgRef = useRef<Config>(null as any)
    cfgRef.current = {
        top,
        bottom,
        sheen,
        blobs,
        scale,
        viscosity,
        speed,
        glow,
        gloss,
        wander,
        magnet,
        sizePercent,
    }

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        let scene: LavaScene
        try {
            scene = new LavaScene(container, cfgRef.current)
        } catch {
            return
        }
        sceneRef.current = scene
        scene.setSize(container.clientWidth, container.clientHeight)
        scene.start()

        const ro = new ResizeObserver(() => {
            scene.setSize(container.clientWidth, container.clientHeight)
        })
        ro.observe(container)
        return () => {
            ro.disconnect()
            scene.dispose()
            sceneRef.current = null
        }
    }, [])

    useEffect(() => {
        sceneRef.current?.updateConfig(cfgRef.current)
    }, [
        top,
        bottom,
        sheen,
        blobs,
        scale,
        viscosity,
        speed,
        glow,
        gloss,
        wander,
        magnet,
        sizePercent,
    ])

    return (
        <div
            ref={containerRef}
            role="img"
            aria-label="Lava lamp"
            className={className}
            style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minWidth: 120,
                minHeight: 160,
                overflow: "hidden",
                ...style,
            }}
        />
    )
}

LavaLamp.displayName = "Lava Lamp"
LavaLamp.defaultProps = { ...DEFAULTS }

const __originkitPresetProps = {
  "top": "#FFFFFF",
  "bottom": "#8F8F8F",
  "sheen": "#FFFFFF",
  "scale": 1,
  "wander": 15,
  "speed": 13,
  "glow": 11,
  "gloss": 6,
  "sizePercent": 53
};

export default function LavaLamp(props: Record<string, unknown>) {
  return <OriginkitBase_LavaLamp {...(__originkitPresetProps as Record<string, unknown>)} {...props} />;
}
