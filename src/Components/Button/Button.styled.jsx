import styled from "styled-components";

export const ButtonStyle = styled.button `
  width: 100px;
  height: 34px;
  margin: 0px auto;
  border-radius: 80px;
  border: none;
  cursor: pointer;
  
  background-color: ${({theme}) => theme.colors.buttonNormalColor};
  color: ${({theme}) => theme.colors.primaryTextColor};
  font-size: ${({theme}) => theme.fontSizes.m};

  &:hover {
    background-color: ${({theme}) => theme.colors.buttonHoverColor};
  }

  &:disabled{
    background-color: ${({theme}) => theme.colors.buttonDisabledColor};
    color: ${({theme}) => theme.colors.secondaryTextColor};
  }
`