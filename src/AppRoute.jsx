import React from 'react'
import ProductCatalogue from './ProductCataloguePage/ProductCatalogue';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App';
import ProductDetails from './ProductDetailsPage/ProductDetails'
import ScrollToTop from './ScrollToTop/ScrollToTop';
import CartPage from './CartPage/CartPage';
function AppRoute() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/product-catalogue" element={<ProductCatalogue />}></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
    <Route path='/cartPage' element={<CartPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default AppRoute