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
`;