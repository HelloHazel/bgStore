import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 768px) {
    padding: 20px;
  }
`

const ErrorText = styled.p`
  font-size: 18px;
  margin: 0;
`

const Error = () => {
  const navigate = useNavigate()

  useEffect(() => {
    BackToOrder()
  }, [])

  const BackToOrder = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    navigate('/order')
  }

  return (
    <HomeContainer>
      <ErrorText>주문에 실패하였습니다.</ErrorText>
      <ErrorText>다시 시도해주세요.</ErrorText>
    </HomeContainer>
  )
}

export default Error
