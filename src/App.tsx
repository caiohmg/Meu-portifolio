import { BrowserRouter, Route,  Routes } from "react-router-dom";
import { Home } from "./pages/HomePages/home";
import { Projects } from "./pages/projects";

import { GlobalStyles } from "./styles/Global";
import { Biography } from './pages/Biography/Biography';



export function App() {
 return(
 
  <BrowserRouter>
  <GlobalStyles/>
  <Routes>
    
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Projects/>} />
    <Route path="/biography" element={<Biography/>} />
    
  </Routes>
  
  </BrowserRouter>
    
 
 )
}


