import React,{useEffect} from 'react';
import styled from 'styled-components';
import Check from '../assets/icons/CheckFilled.svg';
import { useNavigate } from "react-router-dom";


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const LogoImage = styled.img`
  width: 50px;

`;
const SuccessText = styled.p`
  font-size: 18px;
  margin: 0;
`;



const Complete = () => {

  const navigate = useNavigate();

  useEffect(() => {
    BackToOrder();
  }, []);

  const BackToOrder = async() => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    navigate('/order');
  };

  return (
    <HomeContainer>
      <LogoImage src={Check} alt="Check" />
      <SuccessText>주문이 완료되었습니다.</SuccessText>
    </HomeContainer>
  );
};

export default Complete; 
