import styled from "styled-components";

export const InputStyle = styled.input `
  width: 328px;
  height: 54px;
  margin: 0 auto;
  padding: 14px 0px 14px 16px;
  border: 1px solid;
  border-radius: 4px;
  
  border-color: ${({theme}) => theme.colors.inputBorderColor};
  background-color: ${({theme}) => theme.colors.backgroundColor};
  font-size: ${({theme}) => theme.fontSizes.m};
  
  &:not(:first-child) {
    margin-top: 50px;
  }
`

export const FormWrapper = styled.form `
  display: flex;
  flex-flow: column wrap;
  width: 360px;
  padding: 0px 16px;
  margin: 0 auto;
`

export const Hint = styled.span `
  padding-top: 4px;
  padding-left: 16px;
  text-align: left;  
  
  color: ${({theme}) => theme.colors.inputTextColor};
  font-size: ${({theme}) => theme.fontSizes.xs};
`

export const Label = styled.label `
  padding-top: 7px;
  text-align: left;  
  
  color: ${({theme}) => theme.colors.primaryTextColor};
  font-size: ${({theme}) => theme.fontSizes.m};
`
export const InputCheckbox = styled.input `
  margin-right: 7px;
  text-align: left;  
  border: 1px solid;
  
  border-color: ${({theme}) => theme.colors.checkboxColor};
  font-size: ${({theme}) => theme.fontSizes.m};
`

export const InputUpload = styled.input `
  display: inline-block;
  width: 328px;
  height: 54px;
  margin: 50px auto;
  border: 1px solid;
  border-radius: 4px;
  &::placeholder {
    
  }
  
  color: ${({theme}) => theme.colors.inputBorderColor};
  border-color: ${({theme}) => theme.colors.inputBorderColor};
  background-color: ${({theme}) => theme.colors.backgroundColor};
  font-size: ${({theme}) => theme.fontSizes.m};
  
  &::file-selector-button {
    height: 52px;
    border: 1px solid;
    border-radius: 4px 0px 0px 4px;
    
    background-color: ${({theme}) => theme.colors.backgroundColor};
  }
`

export const ButtonSignUpForm = styled.button `
  width: 100px;
  height: 34px;
  margin: 0px auto;
  border: none;
  border-radius: 80px;
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
