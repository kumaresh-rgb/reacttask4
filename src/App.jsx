
import React, { useEffect } from 'react';
import { inject } from '@vercel/analytics';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

import Header from './pages/Header'
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Footer from './Components/Footer/Footer' 
import Developer from './pages/Developer'
import Theme from "./pages/Theme";
import Register from './pages/Register'
import Login from './pages/Login'
function App() {
  useEffect(() => {
    inject();
  }, []);

  return (
    <Router>
    <div>
  <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Theme" element={<Theme />} />
          <Route path="/Developer" element={<Developer />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
