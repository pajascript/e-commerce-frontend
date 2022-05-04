import styled from 'styled-components';

export const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    transition: all 300ms ease;
    cursor: pointer;
`;

export const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e6f0f3;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`;

export const Circle = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    z-index: 1;
`;

export const Img = styled.img`
    height: 75%;
    z-index: 10;
`;

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 300ms ease;

    &:hover {
        background: #e9f5f5;
        transform: scale(1.1);
    }
`;