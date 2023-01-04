import './App.css';
import React from 'react';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Home from './Components/Home/Home';
 import { BrowserRouter,Routes,Route } from "react-router-dom";
import Contact from './Components/Home/Contact';
import About from './Components/Home/About';
import Navbar from './Components/Navbar/Navbar';



 











const App = () => {
  return (
    <>
   
    
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      
      <Route path='about' element={<About/>}/>
      <Route path='contact' element ={<Contact/>}/>

     
    
    

          
        
        </Routes>
    </BrowserRouter> 
    
  
       
          
        
    
   
    
        
       

   
     
    </>
 
  )
}

export default App
