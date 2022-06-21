import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './ProductsElements';
import Product from '../Product';

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get( category ? `https://kalyeoshop.herokuapp.com/api/products?category=${category}` : "https://kalyeoshop.herokuapp.com/api/products").then((res) => {
      setProducts(res.data);
    })
  }, [category]);


  return (
    <Container>
        {
          products.filter(item => {
            return item.inStock > 0
          }).map(item => <Product item={item} key={item.id} />)
        }
    </Container>
  )
};

export default Products;