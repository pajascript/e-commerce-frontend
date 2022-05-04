import { Container, Img, Info, Title, Button } from './CategoryItemElements';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Link to={ `/products/${item.category}` } >
                <Img src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
};

export default CategoryItem;