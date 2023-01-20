import styled from "styled-components";

export const ButtonStyle = styled.button `
  width: 100px;
  height: 34px;
  margin: 0px auto;
  border-radius: 80px;
  border: none;
  
  background-color: ${({theme}) => theme.colors.buttonActiveColor};
  color: ${({theme}) => theme.colors.primaryTextColor};
  font-size: ${({theme}) => theme.fontSizes.m};
`