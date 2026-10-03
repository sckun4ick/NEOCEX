import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import MainPage from './pages/Page1/MainPage.jsx' 
import Page2 from './pages/Page2/Page2.jsx'
import Page3 from './pages/Page3/Page3.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="project" element={<Page2 />} />
        <Route path="about" element={<Page3 />} />
      </Routes>
    </BrowserRouter>,
)
