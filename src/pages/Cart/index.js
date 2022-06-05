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
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const KEY = "pk_test_51KsO5fAnCla13EzJaa6Qw8JBAHBHO7dZH8Qqa5kD94sSz0r5ugncru2p83kuVt71lt8eJtwNqTM1UWAHoGA9BFz600wjRTewW4";


const Cart = () => {

    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);
    const user = useSelector(state => state.user.currentUser)
    const [stripeToken, setStripeToken] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const onToken = (token) => {
        setStripeToken(token)
    };

    
    const handleQuantity = (type) => {
        if (type ==="dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
    };

    useEffect(() => {
        const makeRequest = async() => {
            try {

                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total,
                });

                navigate("/success", { state: {stripeData: res.data, products: cart} });
            } catch {
                
            }
        }
        stripeToken && cart.total > 0 && makeRequest();

    }, [stripeToken, cart.total]);

    

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>

                <Link to="/" ><TopButton type="" >CONTINUE SHOPPING</TopButton></Link>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled" >PROCEED TO CHECKOUT</TopButton>
            </Top>
            <Bottom>
                <Info>
                    { cart.products.map(product => (
                        <Product >
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
                                    <Remove onClick={ () => handleQuantity("dec")} />
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Add onClick={ () => handleQuantity("inc")} />
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
                        <SummaryItemPrice>₱ {cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Fee</SummaryItemText>
                        <SummaryItemPrice>₱ 38</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total" >
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>₱ {cart.total + 38}</SummaryItemPrice>
                    </SummaryItem>
                    {user ? <StripeCheckout
                        name="Kalye Onse Vape Lounge"
                        image={logo}
                        billingAddress
                        shippingAddress
                        description={`Your total is ₱${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey={KEY}
                        email={user.email}
                    >
                        <Button >CHECKOUT NOW</Button>
                    </StripeCheckout> : <Link to="/login">Login to Checkout</Link>}
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
};

export default Cart;