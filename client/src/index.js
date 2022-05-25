import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Header from './Component/Header';
import Login from './Component/Routes/Login';
import Profil from './Component/Routes/Profil';

import './Style/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="user/:name" element={<Profil />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
