import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Otimização: Carregamento assíncrono do CSS crítico
const loadCriticalCSS = () => {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/src/index.css'
  document.head.appendChild(link)
}

// Carregamento otimizado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadCriticalCSS)
} else {
  loadCriticalCSS()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
