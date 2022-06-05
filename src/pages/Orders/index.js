import React, { useEffect, useState } from 'react';
import Announcement from '../../components/Announcement';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { userRequest } from "../../requestMethods";
import {Container,
        Wrapper,  
        Title, 
        Top, Bottom, 
        TopButton,
        Info,
        Product,
        ProductDetail, 
        Img,
        Details,
        ProductName,
        ProductId,
        ProductSize,
        ProductPrice,
        PriceDetail,
        Hr,
        StatusButton
    } from "./OrdersElements";
import { Link } from 'react-router-dom';
import image from "../../images/overtopped.png";
import { useSelector } from 'react-redux';
import axios from 'axios';

const Orders = () => {

    const [order, setOrder] = useState({});
    const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
    const userId = useSelector(state => state.user.currentUser._id)

    useEffect(() => {
        axios.get(`http://localhost:5000/api/orders/find/${userId}`, {headers: {token: `Bearer ${TOKEN}`}})
            .then((res) => {
                setOrder(res.data)
                console.log(res.data)
            })
    }, [])

  return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>ORDER HISTORY</Title>
                <Top>
                    <Link to="/" ><TopButton type="filled" >CONTINUE SHOPPING</TopButton></Link>
                </Top>
                <Bottom>
                    <Info>
                                <Product >
                                    <ProductDetail>
                                        {}
                                        <Details>
                                            <ProductId><b>ID:</b> {order._id}</ProductId>
                                            <ProductSize><b>Quantity:</b> {/*JSON.stringify(order.products[0].quantity)*/}</ProductSize>
                                            <ProductSize><b>Date Ordered:</b> {order.createdAt}</ProductSize>
                                            <ProductSize><b>Shipping Address:</b> {JSON.stringify(order.address)}</ProductSize>
                                        </Details>
                                    </ProductDetail>
                                    <PriceDetail>
                                        <ProductPrice><b>Price: </b>₱ {order.amount}</ProductPrice>
                                        <StatusButton>{order.status}...</StatusButton>
                                    </PriceDetail>
                                </Product>
                        <Hr/>
                    </Info>
                    
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>

  )
};

export default Orders;