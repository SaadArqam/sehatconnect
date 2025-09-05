import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
import History from './components/history.jsx'
import Update from './components/update.jsx'
import { MedicalProvider } from './context/MedicalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MedicalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/history" element={<History />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </MedicalProvider>
  </StrictMode>,
)
