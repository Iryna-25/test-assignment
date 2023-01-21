import React from "react";
import { HeroTextSubTitle, HeroTextTitle, HeroTextWrapper } from "./Hero.styled";


const HeroText = () => (
    <HeroTextWrapper>
        <HeroTextTitle>
            Test assignment for front-end developer
        </HeroTextTitle>
        <HeroTextSubTitle>
            What defines a good front-end developer 
            is one that has skilled knowledge of HTML, 
            CSS, JS with a vast understanding of User design 
            thinking as they'll be building web interfaces with 
            accessibility in mind. They should also be excited to learn, 
            as the world of Front-End Development keeps evolving.
        </HeroTextSubTitle>
    </HeroTextWrapper>
);
export default HeroText;
