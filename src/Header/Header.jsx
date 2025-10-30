import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import Input from './Input.jsx'
import Dropdown from './Dropdown.jsx'
import { Link } from 'react-router-dom'
function Header({addToCart}) {
  const [cartProducts , setCartProducts] = useState([{}]);

  useEffect(()=>{
    function addCartProducts(){
        setCartProducts(addToCart)
        console.log(cartProducts,"cart")
    }
    addCartProducts();
  },[{cartProducts}])
function handleAboutUs(){
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
 }
  return (
    <div className={style.header}>
       
       <Input className={style.headerInput}/>
       <div className={style.headerContent}>
        <Link to="/">
            <label className={style.headerContentItems}>Home</label>
        </Link>
            <label className={style.headerContentItems}> <Dropdown /></label>
            <label  className={style.headerContentItems}>Top Picks</label>
            <label onClick={handleAboutUs} className={style.headerContentItems}>About Us</label>
        </div>
        <div>
        {/* state={{cart:addToCart}} */}
          <Link to="/cartPage" >
            <img className={style.cartIcon}src="src\assets\shopping-cart-simple-bold.svg"></img>
          </Link>
        </div>
    </div>
  )
}

export default Header
