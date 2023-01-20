import styled from "styled-components";

export const Wrapper = styled.div `
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  width: 360px;

  @media screen and (min-width: 768px)
  {
    min-width: 768px;
  }

  @media screen and (min-width: 1024px)
  {
    min-width: 1024px;
  }

  @media screen and (min-width: 2560px)
  {
    max-width: 1170px;
  }
`
