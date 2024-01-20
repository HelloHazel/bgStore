import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/icons/logo-black.svg'

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 10px;
  top: 0;
  position: fixed;
  z-index: 1000;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

const LogoImage = styled.img`
  height: 35px;
  margin-right: 10px;
  padding: 20px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="Logo" />
    </HeaderContainer>
  )
}

export default Header
