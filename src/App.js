import React from 'react';
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Addtocarts } from "./components/Addtocarts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Products />} />

          <Route exact path="/carts" element={<Addtocarts />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}
