import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {App} from './App';
import Signup from './pages/Signup';
import Details from './pages/Details';
import Home from './pages/Home';

import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='signup' element={<Signup />}>
        </Route>
        <Route path='details' element={<Details />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
