import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import App from './App';
import Header from './Component/header'
import Profil from './Component/Routes/Profil'

import "./Style/app.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header></Header>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="user/:name" element={<Profil/>}/>
  </Routes>
  </BrowserRouter>
);
