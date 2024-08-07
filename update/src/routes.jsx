import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
//import About from './components/about';
//import Contact from './components/contact';



const AppRoutes = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
     {/* <Route path="/about" element={<About />} /> 
      <Route path="/contact" element={<Contact />} /> */}  
    </Routes>

  );
}

export default AppRoutes;

