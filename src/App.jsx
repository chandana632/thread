import { useState } from 'react'
import './App.css'
import AboutPage from './About-Page/About-Page'
import Header from './Header/Header'
import Services from './Content/Services/Services'
// import ProductCatalogue from './ProductCataloguePage/ProductCatalogue'
// import FilterComponent from './ProductCataloguePage/FilterComponent/FilterComponent'
// import ProductDetails from './ProductDetailsPage/ProductDetails'
// import CartPage from './CartPage/CartPage'
import AppRoute from './AppRoute'
function App() {
  return (
    <>

    <div className='thread-tales'>
     
      <Services/>
      {/* <ProductCatalogue/> */}
      {/* <FilterComponent/> */}
     
      {/* <ProductDetails/> */}
      {/* <CartPage/> */}
    
    </div>
      
    </>
  )
}

export default App
