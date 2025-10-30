import React from 'react'
import Style from './SelectedProduct.module.css'
import { Button, Divider } from '@mui/material'

function SelectedProduct() {
    return (
        <div className={Style.cartContainer}>
            <div className={Style.cartProductInfoContainer}>
            <div className={Style.selectedImageContainer}>
                <img className={Style.selectedImage} src='src\assets\blouse.svg'></img>
            </div>
            <div className={Style.productDetails}>
                <div className={Style.productInfo}>
                    <label className={Style.productTitle}>Elegant Red Blouse</label>
                    <div className={Style.selectedContainer}>
                        <label className={Style.labelHeader}>Color: </label>
                        <label className={Style.selectedLabel}>Selected Color</label>
                    </div>
                    <div className={Style.selectedContainer}>
                        <label className={Style.labelHeader}>Size:</label>
                        <label className={Style.selectedLabel}>Selected Size</label>
                    </div>

                </div>
                <div className={Style.productCount}>
                <div className={Style.productCounter}>
                            <Button className={Style.countBox1} variant='outlined'>+</Button>
                            <input className={Style.countBox2} type="number"></input>
                            <Button className={Style.countBox3} variant='outlined'>-</Button>
                        </div>
                   
                        <Button className={Style.optionContainer}>Delete</Button>
                    <Divider className={Style.divider}orientation="horizontal"></Divider>
                    <Button className={`${Style.optionContainer} ${Style.moreLikeThisText}`}>More Like This</Button>
                </div>
            </div>
            </div>
         
            <div className={Style.productPriceContainer}>
                <label  className={Style.productPrice}>₹3200</label>
            </div>
        </div>
       
    )
}

export default SelectedProduct