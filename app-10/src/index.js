import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Details from './components/Details';

import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      
      {/* Default App / Nav Bar. */}
      <Route path='/' element={<App />}>

      {/* HomePage */}
      <Route index element={<Home />} />


      {/* Products Page */}
      <Route path='product'>
        <Route index element={<ProductPage />} />
        <Route path='/product/:id' element={<Details />} />
      </Route>

      </Route>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
