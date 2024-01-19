import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/icons/logo-black.svg';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const LogoImage = styled.img`
  width: 200px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const OrderButton = styled(Link)`
  margin-top: 20px;
  padding: 15px 30px;
  background-color: white;
  color: black;
  text-decoration: none;
  font-size: 18px;
  border-radius: 5px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <LogoImage src={Logo} alt="Logo" />
      <OrderButton to="/order">주문하러 가기</OrderButton>
    </HomeContainer>
  );
};

export default Home; 
