import React from 'react'
import SelectedProduct from './SelectedProducts/SelectedProduct'
import Style from './CartPage.module.css'
import { Button } from '@mui/material'
import Header from '../Header/Header'
import AboutPage from '../About-Page/About-Page'
import { useLocation } from 'react-router-dom'

function CartPage() {

  // const cartDetails = useLocation();
  // const cartData = cartDetails.state.cart;
  // console.log(cartData,"cart data")
  return (
    <div>
<Header/>
   
    <div>
        <div>

        <SelectedProduct/>
    
        </div>
        <div className={Style.subtotalContainer}>
           <label className={Style.subTotalLabel}>SubTotal</label> 
           <label className={Style.totalPrice}>₹6400</label>
        </div>
        <div className={Style.checkoutContainer}>
        <Button className={Style.checkoutText} variant='outlined'>Checkout</Button>
        </div>
    </div>
    <AboutPage/>
    </div>
  )
}

export default CartPage