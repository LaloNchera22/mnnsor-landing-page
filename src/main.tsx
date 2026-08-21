import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ConversionProvider from './components/conversion/ConversionProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConversionProvider>
      <App />
    </ConversionProvider>
  </StrictMode>,
)
