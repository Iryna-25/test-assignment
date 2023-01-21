import React from "react";
import Button from "../Button/Button";
import Logo from "../../Assets/Logo.svg";
import { ButtonsWrapper, LogoStyled, Navigation } from "./Header.styled";

const Header = () => (
    <header>
        <Navigation> 
            <LogoStyled>
                <img src={Logo} alt="Logo" /> 
            </LogoStyled>
            <ButtonsWrapper>
                <Button text="Users"/>  
                <Button text="Sign up"/>  
            </ButtonsWrapper>
        </Navigation> 
    </header>
);

export default Header;