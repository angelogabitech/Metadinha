
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css";
import "./login.css";   
import "./index.css";   

import App from './App.jsx'







// Detecta elementos ao aparecer no scroll
const fadeElements = document.querySelectorAll(".fade-item");

function showElementsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("show");
    }
  });
}



window.addEventListener("scroll", showElementsOnScroll);
showElementsOnScroll();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
    
  </StrictMode>,
)
