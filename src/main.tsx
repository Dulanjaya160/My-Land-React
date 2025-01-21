import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./Pages/HomePage"; 
import "./assets/CSS/index.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
)
