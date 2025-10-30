import React, { useEffect } from 'react'
import Style from './ProductCatalogue.module.css'
import Product from '../Content/ProductCard'
import Pagination from '@mui/material/Pagination';
import { Link, useLocation } from "react-router-dom";
import Header from '../Header/Header';
import AboutPage from '../About-Page/About-Page';
import ProductCard from '../Content/ProductCard';
import { useState } from 'react';

function ProductCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const location = useLocation();
  const category = location.state.Category;
  const url = `http://localhost:3000/products?productCategory=${category}`;
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setSelectedCategory(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className={Style.ProductCatalogueContainer}>
        <div className={Style.productFilterConatiner}>
          <img src="src\assets\hamburger.svg"></img>
          <label className={Style.filterResultText}>1-1000  over 2000 products</label>
          <img className={Style.sortIcon} src="src\assets\sort.svg"></img>
        </div>
        <div className={Style.ProductsList}>
          {
            selectedCategory.length > 0 ? (
              selectedCategory.map((product) => (
                <Link to={`/product-details`} key={product.id} state={{product:product}}>
                <ProductCard key={product.id} product={product} />
                </Link>
              ))
            ) : (
              <p>No products found.</p>
            )
          }

        </div>
        <div className={Style.pagination}>
          <Pagination variant="outlined" count={10} />
        </div>

      </div>
      <AboutPage />
    </div>
  )
}

export default ProductCatalogue