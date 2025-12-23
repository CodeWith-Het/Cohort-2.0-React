import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Cohort-2.0-React/class3-task">
  <App />
</BrowserRouter>,
)
