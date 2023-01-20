import React from "react";
import Button from "../../Button/Button";
import { HeroWrapper } from "../Main.styled";
import HeroText from "./HeroText";

const Hero = () => (
    <HeroWrapper>
        <HeroText/> 
        <Button text="Sign Up" />
    </HeroWrapper>
);
export default Hero;
