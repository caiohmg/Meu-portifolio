import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Biography } from "./pages/Biography/Biography";
import  { Header } from "./pages/Header";
import { Projects } from "./pages/projects";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Projects/>
    <Biography/>
    
  </React.StrictMode>
);
