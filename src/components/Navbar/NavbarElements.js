import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
    height: 70px;
    ${mobile( {
        height: "50px"
    })}
`;

export const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile( {
        padding: "10px 0"
    })}
`;

export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile( {
        display: "none"
    })}
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Input = styled.input`
    border: none;
    ${mobile( {
        width: "50px"
    })}
`;

export const Logo = styled.img`
    width: 50px;
    height: auto;
    border-radius: 50%;
    ${mobile( {
        width: "24px"
    })}
`;

export const Center = styled.div`
    flex: 1;
    text-align: center;
`;

export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile( {
        justifyContent: "center",
        flex: "2"
    })}
`;

export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile( {
        fontSize: "12px",
        marginLeft: "10px"
    })}
`;

export const LogoutBtn = styled.button`
    border: 1px solid black;
    padding: 5px;
    margin: 0 10px 0 20px;
    background: inherit;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        background: #000;
        color: #fff;
    }
`;