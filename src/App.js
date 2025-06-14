import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MNavbar from './Components/Barradenav';
import DataU from "../src/Data/Datau.js"

function App() {
  return (
   
    <Router>{}
      <MNavbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Inicio" />} />
        
          {DataU.map((route,index)=>( <Route key={index} 
          path={route.path} element={route.element} /> ))} 
      </Routes>
    </Router>
       
  );
}

export default App;
