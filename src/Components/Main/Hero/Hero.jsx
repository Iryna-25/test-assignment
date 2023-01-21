import React from "react";
import Button from "../../Button/Button";
import { HeroWrapper } from "./Hero.styled";
import HeroText from "./HeroText";


const Hero = () => (
    <section>
        <HeroWrapper>
            <HeroText/> 
            <Button text="Sign up" />
        </HeroWrapper>
    </section>
);
export default Hero;
