import styled from "styled-components";

export const TeamMembersSection = styled.section `
  text-align: center;
  justify-content: center;
  margin: 0px 16px;

  @media screen and (min-width: 768px)
  {
    margin: 0px auto;
  }

  @media screen and (min-width: 1024px)
  {

  }

  @media screen and (min-width: 2560px)
  {

  }
`

export const TeamMembersList = styled.ul `
  display: block;
  padding: 0px auto;
  @media screen and (min-width: 768px)
  {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
  @media screen and (min-width: 1024px)
  {
    gap: 29px;
  }
`

export const MemberCard = styled.li `
  min-width: 328px;
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
  @media screen and (min-width: 768px)
  {
    max-width: 344px;
    margin: 0px;
  }

  @media screen and (min-width: 1024px)
  {
    max-width: 282px;
  }
`

export const MemberImageWrapper = styled.div `
  @media screen and (min-width: 768px)
  {

  }

  @media screen and (min-width: 1024px)
  {

  }

  @media screen and (min-width: 2560px)
  {

  }
`

export const MemberImage = styled.img `
  border-radius: 50%;
  text-align: center;
  margin: 0px auto;
  @media screen and (min-width: 768px)
  {

  }

  @media screen and (min-width: 1024px)
  {

  }

  @media screen and (min-width: 2560px)
  {

  }
`

export const MemberName = styled.p `
padding: 20px;
`
export const MemberInfo = styled.p `
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`
