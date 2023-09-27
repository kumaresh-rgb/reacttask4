// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Header from './pages/Header'
import About from "./pages/About";
import Users from "./pages/Users";
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <Router>
    <div>
  <Header/>
      <Routes>
        <Route>
          <Route path="/" element={<Home ClassName="bg-gray-400"/>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
