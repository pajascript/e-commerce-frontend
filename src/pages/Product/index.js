import { Container, FilterContainer, AddContainer, AmountContainer, Amount, Button, Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption, Wrapper, ImgContainer, Img, InfoContainer, Title, Desc, Price } from "./ProductElements";
import Navbar from '../../components/Navbar';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { Add, Remove } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartRedux";


const Product = () => {

  const location = useLocation();  
  const id = location.pathname.split("/")[2];

  //States
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  //Functions
  const handleQuantity = (type) => {

    if (type ==="dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }

  };

  const handleClick = () => {
    
    dispatch(addProduct({ ...product, quantity, color, size }));
    
  };

  //useEffect
  useEffect(() => {

    const getProduct = async() => {
        try {

            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);

        } catch (err) {

        }
    };

    getProduct();

  }, [id]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Desc>In Stock: {product.inStock}</Desc>
          <Price>Price: {product.price}</Price>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={ () => handleQuantity("dec") } />
              <Amount>{ quantity }</Amount>
              <Add onClick={ () => handleQuantity("inc") } />
            </AmountContainer>
            <Button onClick={handleClick} >ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Product;