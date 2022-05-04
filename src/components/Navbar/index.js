import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link } from "react-router-dom";
import {Container,
        Wrapper,
        Left,
        Language,
        SearchContainer,
        Input,
        Center,
        Logo,
        Right,
        MenuItem,
      } from './NavbarElements';
import logo from '../../images/logo.jpg';
import { useSelector } from "react-redux";


const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color: 'gray', fontSize:'16px'}} />
          </SearchContainer>
        </Left>
        <Center><Logo src={logo} /></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart" >
            <MenuItem>
                <Badge badgeContent={quantity} color="primary" >
                  <ShoppingCartOutlined />
                </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
};

export default Navbar;