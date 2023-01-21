import styled from "styled-components";
import background from "../../../Assets/pexels-alexandr-podvalny-1227513.jpeg";

export const HeroWrapper = styled.div `
  width: 360px;
  height: 500px;
  text-align: center;
  background-image: 
    linear-gradient( 0deg,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), 
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px){
    width: 768px;
  }
  @media screen and (min-width: 1024px){
    width: 1024px;
    height: 650px;
  }
  @media screen and (min-width: 2560px){
    width: 1170px;
  }
`

export const HeroTextWrapper = styled.div `
  width: 328px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 32px;

  @media screen and (min-width: 768px){
    padding-top: 89px;
    width: 380px;
  }
  @media screen and (min-width: 1024px){
    padding-top: 164px;
  }
  @media screen and (min-width: 2560px){
    max-width: 1170px;
  }
`

export const HeroTextTitle = styled.h1 `
  padding-bottom: 21px;
  
  font-size: ${({theme}) => theme.fontSizes.title};
  color: ${({theme}) => theme.colors.secondaryTextColor};
  font-weight: ${({theme}) => theme.fontWeights.normal};
  line-height: ${({theme}) => theme.lineHeights.heading};
`

export const HeroTextSubTitle = styled.p `
  font-size: ${({theme}) => theme.fontSizes.m};
  font-weight: ${({theme}) => theme.fontWeights.normal};
  color: ${({theme}) => theme.colors.secondaryTextColor};
  line-height: ${({theme}) => theme.lineHeights.body};
`