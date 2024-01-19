import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  width: 350px; 
  height: 40px;
  font-size : 1rem;

  ${(props) =>
    props.isLoading &&
    css`
      background-color: #ccc; /* semi-gray color when isLoading is true */
    `}
`;

function Button({children,...rest}){
    return <StyledButton {...rest}>{children}</StyledButton>
}


export default Button;