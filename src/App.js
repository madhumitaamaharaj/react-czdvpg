import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/nav";
import { Home } from "./components/home";
import { Contact } from "./components/example";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
         
         
          <Route path="/contact" element={<Contact />} />



          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;