import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.colors.backgroundColor};
        color: ${({theme}) => theme.colors.primaryTextColor};
        margin: 0;
        font-family: 'Nunito', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1,h2,h3,h4,h5,h6,p {
        margin: 0;
    }

    h2 {
        margin-bottom: 50px;
        color: ${({theme}) => theme.colors.primaryTextColor};
        font-weight: ${({theme}) => theme.fontWeights.normal};
        font-size: ${({theme}) => theme.fontSizes.title};
    }

    h3 {
        margin: 0;
        color: ${({theme}) => theme.colors.primaryTextColor};
        font-weight: ${({theme}) => theme.fontWeights.normal};
        font-size: ${({theme}) => theme.fontSizes.m};
        padding-top: 25px;
        padding-bottom: 5px;
        text-align: left;
    }

    ul, li{
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    }
    img {
        display: block;
    }
    section {
        text-align: center;
        justify-content: center;
        padding: 140px 16px 0px 16px;
        width: 360px;
        margin: 0px auto;

        &:last-child{
            padding-bottom: 100px;
        }
        &:first-child{
            padding: 0px;
        }

        @media screen and (min-width: 768px){
            width: 768px;
            padding: 140px 32px 0px 32px;
        }
        @media screen and (min-width: 1024px){
            width: 1024px;
            padding: 140px 60px 0px 60px;
        }
        @media screen and (min-width: 2560px){
            width: 1170px;
            padding: 140px 0px 0px 0px;
        }
    }
`;