import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {Container,
        Wrapper,  
        Title, 
        Top, Bottom, 
        TopButton, 
        TopTexts, 
        TopText, 
        Info,
        Product, 
        ProductDetail, 
        Img, 
        Details, 
        ProductName, 
        ProductId, 
        ProductColor, 
        ProductSize,
        ProductAmountContainer,
        ProductAmount,
        ProductPrice,
        PriceDetail,
        Hr,
        Summary,
        SummaryTitle,
        SummaryItem,
        SummaryItemText,
        SummaryItemPrice,
        Button
         } from './CartElements';
import { Add, Remove } from '@material-ui/icons';
import StripeCheckout from "react-stripe-checkout";
import logo from "../../images/logo.jpg";
import { useEffect, useState } from "react";
import { userRequest} from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const KEY = process.env.REACT_APP_STRIPE;


const Cart = () => {

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };


    useEffect(() => {
        const makeRequest = async() => {
            try {

                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 500,
                });

                navigate("/success", { data: res.data });
                console.log(res.data)
            } catch {

            }
        }
        stripeToken && makeRequest();

    }, [stripeToken, cart.total]);

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>

                <TopButton type="" >CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled" >PROCEED TO CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    { cart.products.map(product => (
                        <Product>
                            <ProductDetail>
                                <Img src={product.img} />
                                <Details>
                                    <ProductName><b>Product:</b> {product.title}</ProductName>
                                    <ProductId><b>ID:</b> {product._id}</ProductId>
                                    <ProductColor color={product.color} />
                                    <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>₱ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>
                    ))}
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total" >
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="Kalye Onse Vape Lounge"
                        image={logo}
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                    >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
};

export default Cart;