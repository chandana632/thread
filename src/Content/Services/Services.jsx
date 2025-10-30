import React, { useEffect, useRef } from "react";
import Style from "./Services.module.css";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { Category } from "@mui/icons-material";
import Header from "../../Header/Header";
import AboutPage from "../../About-Page/About-Page";
 

function Services() {
  const newArrivalsRef = useRef(null);
  const topRatedRef = useRef(null);
  useEffect(() => {
    newArrivalsRef.current.classList.add(Style.productVariantSelected);
  }, [])
  function handleNewCatalogue() {
    if (newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      newArrivalsRef.current.classList.add(Style.productVariantSelected);
      topRatedRef.current.classList.remove(Style.productVariantSelected);
    }
  }

  function handleTopRated() {

    if (topRatedRef.current) {
      topRatedRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
      topRatedRef.current.classList.add(Style.productVariantSelected);
      newArrivalsRef.current.classList.remove(Style.productVariantSelected);

    }
  }

  return (
    <div>
      <Header/>
   
    <div className={Style.landingPageContainer}>
      <div>
        <img
          className={Style.landingImage}
          src="src\assets\Landing Image.svg"
        ></img>
      </div>
      <div className={Style.servicesContainer}>
        <div className={Style.cashOnDelivery}>
          <div>
            <img src="src\assets\cash-on-delivery.svg"></img>
          </div>
          <div>
            <label className={Style.serviceText}>Cash On Delivery</label>
          </div>
        </div>
        <div className={Style.cashOnDelivery}>
          <div>
            <img src="src\assets\shipping.svg"></img>
          </div>
          <div>
            <label className={Style.serviceText}>Free Shipping</label>
          </div>
        </div>
        <div className={Style.cashOnDelivery}>
          <div>
            <img src="src\assets\online-support.svg"></img>
          </div>
          <div>
            <label className={Style.serviceText}>Online Support</label>
          </div>
        </div>
      </div>
      <div className={Style.catalogueContainer}>
        <div className={Style.newCatalogue} onClick={handleNewCatalogue}>
          <div className={Style.newCatalogueText}>
            <label className={Style.newArrivalsText}>New Arrivals</label>
            <label className={Style.designerWear}>Designer Wears</label>
          </div>
        </div>
        <div className={Style.productContainer}>
          <div className={Style.productCards}>
            <div className={Style.productCard1} >
              <Link className={Style.lehengaRoute} to="/product-catalogue"
              state={{Category:"Lehenga"}}>
              <label className={Style.productText}>LEHENGA</label></Link>
            </div>
            <div className={Style.productCard2}>
              <Link className={Style.lehengaRoute} to="/product-catalogue" state={{Category:"Blouse"}}>
              <label className={Style.productText}>BLOUSE</label>
              </Link>
            </div>
          </div>
          <div className={Style.lastProductCard}>
            <Link className={Style.lehengaRoute} to="/product-catalogue"state={{Category:"Saree"}}>
            <label className={Style.productText}>SAREE</label>
            </Link>
          </div>

        </div>
      </div>

      <div className={Style.productsContainer}>
        <label className={Style.productContainerText}>Products</label>
        <div className={Style.productsVariant}>
          <label id="newArrivals" ref={newArrivalsRef} className={Style.productVariantText} onClick={handleNewCatalogue}>New Arrivals</label>
          <label ref={topRatedRef} onClick={handleTopRated} className={Style.productVariantText}>Top Rated</label>
        </div>
      </div>
      <div className={Style.productListContainer}>
        <Link to="/product-details">
        <ProductCard />
        </Link>
        <Link to="/product-details">
        <ProductCard />
        </Link>
        <Link to="/product-details">
        <ProductCard />
        </Link>
        <Link to="/product-details">
        <ProductCard />
        </Link>
        <Link to="/product-details">
        <ProductCard />
        </Link>
        <Link to="/product-details">
        <ProductCard />
        </Link>
        <Link to="/product-details">
        <ProductCard />
        </Link>
      </div>
     
    </div>
    <AboutPage/>
    </div>
  );
}

export default Services;
