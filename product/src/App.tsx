import React from 'react';
import './index.css';
import ProductList from './components/product-list/ProductList';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './components/product-details/ProductDetails';

export const App = () => (
  <div className='container'>
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/:id' element={<ProductDetails />} />
    </Routes>
  </div>
);
