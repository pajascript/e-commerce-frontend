import { FilterFrames, PermIdentity, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link, Navigate, useNavigate } from "react-router-dom";
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
        LogoutBtn
      } from './NavbarElements';
import logo from '../../images/logo.jpg';
import { useSelector } from "react-redux";


const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector(state => state.user.currentUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          {user && <Link to="/orders" style={{color: "black", textDecoration: "none"}} >
            <SearchContainer>
                <FilterFrames />
                  Orders  |
            </SearchContainer>
          </Link>}
        </Left>
        <Center><Link to="/"><Logo src={logo} /></Link></Center>
        <Right>
          { !user && <MenuItem> <Link to="/register" >REGISTER</Link> </MenuItem> }
          { !user && <MenuItem> <Link to="/login" >SIGN IN</Link> </MenuItem>}
          {user && <Link to="/profile" 
                      style={{textDecoration: "none", 
                      display: "flex", 
                      alignItems: "center", 
                      color: "black"}} 
                      ><PermIdentity />  Profile
                    </Link>}
          {user && <LogoutBtn onClick={handleLogout} >Logout</LogoutBtn>}
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