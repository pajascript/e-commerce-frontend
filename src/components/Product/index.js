import { ShoppingCartOutlined } from '@material-ui/icons';
import { Container, Circle, Img, Info, Icon } from './ProductElements';
import { Link } from "react-router-dom";

const Product = ({ item }) => {

  return (
    <Container>
        <Circle />
        <Img src={item.img} />
        <Info>
            <Icon>
                <Link to={`/product/${item._id}`} >
                    <ShoppingCartOutlined />
                </Link>
            </Icon>
        </Info>
    </Container>
  )
};

export default Product;