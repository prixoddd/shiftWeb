import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/sass/global.scss'
import App from './App.jsx'
import '@/i18n/config.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
)
