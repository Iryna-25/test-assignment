import styled from "styled-components";

export const Navigation = styled.nav `
  display: flex;
  padding: 13px 12px;

  @media screen and (min-width: 768px)
  {
    padding: 13px 32px;
  }

  @media screen and (min-width: 1024px)
  {
    padding: 13px 60px;
  }

  @media screen and (min-width: 2560px)
  {
    max-width: 1170px;
  }

`

export const LogoStyled = styled.div `
  margin-right: 14px;
  @media screen and (min-width: 768px)
  {
    margin-right: 390px;
  }

  @media screen and (min-width: 1024px)
  {
    margin-right: 590px;
  }
`

export const ButtonsWrapper = styled.div `
  display: flex;
  gap: 10px;
`
