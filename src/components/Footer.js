import styled from 'styled-components';
import logo from '../images/logo.jpg';

const Container = styled.div`
    width: 100%;
    height: 120px;
    background: teal;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    height: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Logo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const Desc = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
`;


const Footer = () => {
  return (
    <Container>
        <Content>
            <Logo>
                <Img src={logo} />
            </Logo>
            <Desc>Copyright© 2022 Kalye Onse Vape Lounge. All Rights Reserved</Desc>
        </Content>
    </Container>
  )
};

export default Footer;