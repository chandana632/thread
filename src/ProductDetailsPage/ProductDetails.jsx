import React, { useEffect, useReducer, useState } from 'react'
import Style from './ProductDetails.module.css'
import ColorComponent from '../ProductCataloguePage/ColorComponent/ColorComponent'
import SizeComponent from '../ProductCataloguePage/SizeComponent/SizeComponent'
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Product from '../Content/ProductCard';
import Header from '../Header/Header';
import AboutPage from '../About-Page/About-Page';
import { useLocation } from 'react-router-dom';
import Rating from '../ProductDetailsPage/Rating/Rating';

function ProductDetails() {
    const productDetails = useLocation();
    const productData = productDetails.state.product;
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [cartCounterValue, setCartCounterValue] = useState(0);
    const [alignment, setAlignment] = useState('ratings');
    const [rateParts, setRateParts] = useState([]);
    const [addToCart , setAddToCart] = useState();

    const handleCartCounter = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };

            case 'decrement':
                return { count: Math.max(0, state.count - 1) };

            case 'delete':
                return { count: 0 };
        }

    }
    const [state, dispatch] = useReducer(handleCartCounter, { count: 0 })

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const handleSelectedColor = (color) => {
        setSelectedColor(color);
    }
    const handleSelectedSizeChange = (size) => {
        setSelectedSize(size);
    }
    useEffect(() => {
        const handleGetRating = () => {
            if (!productData || !productData.productRating) return;
        
            const maxStars = 5; 
            const integerPart = Math.floor(productData.productRating);
            const decimalPart = parseFloat((productData.productRating - integerPart).toFixed(1));
            const parts = [];
        
            for (let i = 0; i < maxStars; i++) {
                if (i < integerPart) {
                    parts.push(1); 
                } else if (i === integerPart && decimalPart > 0) {
                    parts.push(decimalPart);
                } else {
                    parts.push(0); 
                }
            }   
            setRateParts(parts);
        };
        handleGetRating()
    }, [])

    const handleAddToCart = () =>{
        const cartProduct = {
            productId:productData.id,
            productName:productData.productName,
            productSelectedColor:selectedColor,
            productSelectedSize:selectedSize,
            productQuantity:state.count
        }
        console.log(cartProduct,"cart")
        setAddToCart(cartProduct);
    }

    return (
        <div>
            <Header />
            <div className={Style.productDetailsContainer}>
                <div className={Style.productDetails}>
                    <div className={Style.productImage}>
                        <div className={Style.mainImageContainer} >
                            <img className={Style.mainImage} src='src\assets\blouse.svg'></img>
                        </div>
                        <div className={Style.productGallery}>
                            <img className={Style.productGalleryImages} src='src\assets\blouse.svg'></img>
                            <img className={Style.productGalleryImages} src='src\assets\blouse.svg'></img>
                            <img className={Style.productGalleryImages} src='src\assets\blouse.svg'></img>
                            <img className={Style.productGalleryImages} src='src\assets\blouse.svg'></img>

                        </div>
                    </div>
                    <div className={Style.productInfo}>
                        <div className={Style.productText}>
                            <label className={Style.productCategory}>{productData.productCategory}</label>
                            <label className={Style.productTitle}>{productData.productName}</label>
                            <label className={Style.productPrice}>₹3200</label>
                            <label className={Style.productDetails}>{productData.productDescription}</label>
                        </div>
                        <div className={Style.productStyle}>
                            <div className={Style.productStyleContainer}>
                                <label>Color: {selectedColor}</label>
                                <div className={Style.styleGroup}>
                                    {productData.productColors.map((color) => {
                                        return <ColorComponent fillColor={color} onClick={() => handleSelectedColor(color)}></ColorComponent>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={Style.productStyle}>
                            <div className={Style.productStyleContainer}>
                                <label>Size: {selectedSize}</label>
                                <div className={Style.styleGroup}>
                                    {productData.productSize.map((size) => {
                                        return <SizeComponent onClick={() => handleSelectedSizeChange(size)} setSize={size}></SizeComponent>
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={Style.productCart}>
                            <div className={Style.productCounter}>
                                <Button onClick={() => dispatch({ type: 'decrement' })} className={Style.countBox3} variant='outlined'>-</Button>
                                <input value={state.count} className={Style.countBox2} type="number"></input>
                                <Button onClick={() => dispatch({ type: 'increment' })} className={Style.countBox1} variant='outlined'>+</Button>
                            </div>
                            <Button onClick={handleAddToCart} className={Style.addToCart} variant='outlined'>Add To Cart</Button>
                            <Button onClick={() => dispatch({ type: 'delete' })} className={Style.delete} variant='outlined'>Delete</Button>
                        </div>

                    </div>
                </div>
                <div className={Style.productMoreDetails}>
                    <ToggleButtonGroup
                        className={Style.toggleButtonGrp}
                        color="primary"
                        exclusive
                        value={alignment}
                        onChange={handleChange}
                        aria-label="Platform"
                    >
                        <ToggleButton className={Style.toggleButton} sx={{
                            width: 'auto', fontSize: 'var(--font-size-text-large)',
                            fontWeight: 'var(--font-semi-bold)',
                            color: 'black',
                            backgroundColor: '#16B696 !important',
                            borderRight: '2px solid black !important',
                        }} value="ratings">Ratings</ToggleButton>
                        <ToggleButton sx={{
                            width: 'auto', fontSize: 'var(--font-size-text-large)',
                            fontWeight: 'var(--font-semi-bold)',
                            color: 'black',
                            backgroundColor: '#16B696 !important',
                        }} value="description">Description</ToggleButton>
                        <ToggleButton sx={{
                            width: 'auto', fontSize: 'var(--font-size-text-large)',
                            fontWeight: 'var(--font-semi-bold)',
                            color: 'black',
                            backgroundColor: '#16B696 !important',
                            borderLeft: '1px solid black !important',
                        }} value="info">Additional Information</ToggleButton>
                    </ToggleButtonGroup>
                    <div className={Style.moreDetailsInfo}>
                        {alignment == "ratings" ?
                            <div className={Style.ratingContainer}>
                                <div className={Style.ratingResult}>
                                    <div className={Style.ratingNumber}>
                                        <label className={Style.ratingResultNumber}>{productData.productRating}</label>
                                        <label className={Style.totalRating}>out of 5</label>
                                    </div>
                                </div>
                                <div className={Style.ratingSlider}>
                                    <div className={Style.ratingStars}>
                                        {rateParts.length > 0 ? (
                                            rateParts.map((rate, index) => <Rating  rate={rate} />)
                                        ) : (
                                            <p>No ratings yet</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            :
                            alignment == "description" ?
                                <div><label>Description</label></div>
                                :
                                <div>Additional Info</div>}


                    </div>
                </div>
                <div className={Style.moreProductsContainer}>
                    <label className={Style.moreProductsLabel}>More Products</label>
                    <div className={Style.ProductsList}>
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
            <AboutPage />
        </div>
    )
}

export default ProductDetails