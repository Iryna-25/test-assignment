import styled from "styled-components";

export const TeamMembersList = styled.ul `
  display: block;
  padding: 0px auto;

  @media screen and (min-width: 768px){
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  @media screen and (min-width: 1024px){
    gap: 29px;
  }
`

export const MemberCard = styled.li `
  width: 328px;
  height: 254px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.secondaryTextColor};
  padding: 20px;
  margin-bottom: 20px; 
  text-align: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0px;
  }
  
  @media screen and (min-width: 768px){
    width: 344px;
    margin: 0px;
  }
  @media screen and (min-width: 1024px){
    width: 282px;
  }
  @media screen and (min-width: 2560px){
    width: 370px;
  }
`

export const MemberImage = styled.img `
  margin: 0px auto;
  text-align: center;
  border-radius: 50%;
`

export const MemberName = styled.p `
padding: 20px 0px;
`
export const MemberInfo = styled.p `
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`
export const ButtonShowMore = styled.button `
  width: 120px;
  height: 34px;
  margin: 0px auto;
  border-radius: 80px;
  border: none;
  margin-top: 50px;
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