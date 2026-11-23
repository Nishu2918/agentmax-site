import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Terms } from './components/Terms.tsx'

const isTerms = window.location.pathname.replace(/\/+$/, '') === '/terms'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isTerms ? <Terms /> : <App />}
  </StrictMode>,
)
