import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/global.css'
import './Styles/theme.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
