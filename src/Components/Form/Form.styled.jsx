import styled from "styled-components";

export const InputStyle = styled.input `
    /* width: 380px; */
    width: 328px;
    height: 54px;
    padding: 14px 0px 14px 16px;
    border-radius: 4px;
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.inputBorderColor};
    background-color: ${({theme}) => theme.colors.backgroundColor};

    font-size: ${({theme}) => theme.fontSizes.m};
    margin: 0 auto;
  &:not(:first-child) {
    margin-top: 50px;
  }
`

export const FormWrapper = styled.div `
  display: flex;
  flex-flow: column wrap;
`

export const Hint = styled.p `
  color: ${({theme}) => theme.colors.inputTextColor};
  font-size: ${({theme}) => theme.fontSizes.xs};
  padding-top: 4px;
  padding-left: 16px;
  text-align: left;
`
export const FormSection = styled.section `
  margin: 140px 16px 100px 16px;
  width: 328px;
`
export const Label = styled.section `
  color: ${({theme}) => theme.colors.primaryTextColor};
  font-size: ${({theme}) => theme.fontSizes.m};
  padding-top: 7px;
  text-align: left;
`
export const InputCheckbox = styled.input `
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.checkboxColor};
  font-size: ${({theme}) => theme.fontSizes.m};
  padding-right: 7px;
  text-align: left;
`

export const InputUpload = styled.input `
  display: inline-block;
  width: 328px;
  height: 54px;
  border-radius: 4px;
  border: 1px solid;
  color: ${({theme}) => theme.colors.inputBorderColor};
  border-color: ${({theme}) => theme.colors.inputBorderColor};
  background-color: ${({theme}) => theme.colors.backgroundColor};

  font-size: ${({theme}) => theme.fontSizes.m};
  margin: 50px auto;
  /* margin: 64px auto; */


  &::file-selector-button {
    height: 52px;
    background-color: ${({theme}) => theme.colors.backgroundColor};
    border: 1px solid;
    border-radius: 4px 0px 0px 4px;

  }
`
