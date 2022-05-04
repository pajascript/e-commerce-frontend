import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Container, Circle, Img, Info, Icon } from './ProductElements';
import { Link } from "react-router-dom";

const Product = ({ item }) => {

  return (
    <Container>
        <Circle />
        <Img src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <Link to={`/product/${item._id}`} >
                    <SearchOutlined />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
};

export default Product;