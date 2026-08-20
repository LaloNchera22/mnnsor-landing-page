import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Agents from './pages/Agents';
import AgentDetail from './pages/AgentDetail';
import SecurityPage from './pages/SecurityPage';
import Results from './pages/Results';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/plataforma" element={<Platform />} />
          <Route path="/agentes" element={<Agents />} />
          <Route path="/agentes/:slug" element={<AgentDetail />} />
          <Route path="/seguridad" element={<SecurityPage />} />
          <Route path="/resultados" element={<Results />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
