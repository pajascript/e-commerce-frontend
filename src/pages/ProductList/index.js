import { Container, Title, FilterContainer, Filter, FilterText, Select, Option } from "./ProductListElements";
import Navbar from '../../components/Navbar';
import Announcement from '../../components/Announcement';
import Products from '../../components/Products';
import Footer from '../../components/Footer';
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {

  const location = useLocation();  
  const category = location.pathname.split("/")[2];


  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>{category}</Title>
        <Products category={category} />
        <Footer />
    </Container>
  )
};

export default ProductList;