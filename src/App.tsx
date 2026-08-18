
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Agents from './components/Agents'
import Integration from './components/Integration'
import Results from './components/Results'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <Agents />
        <Integration />
        <Results />
      </main>
      <Footer />
    </div>
  )
}

export default App
