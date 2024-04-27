import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';

const RemoteProductList: any = React.lazy(
  () => import('Product_APP/productList')
);
const RemoteProductDetails: any = React.lazy(
  () => import('Product_APP/productDetails')
);
export const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<RemoteProductList />} />
        <Route path='/products' element={<RemoteProductList />} />
        <Route path='/products/:id' element={<RemoteProductDetails />} />
      </Routes>
    </div>
  );
};
