import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './views/Home.jsx'
import Contact from './views/Contact.jsx'
import About from './views/About.jsx'
import NotFound from './views/NotFound.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { ContextProvider } from './context/ContextProvider.jsx'
import News from './views/News.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/:name" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ContextProvider>
   </StrictMode>,
)
