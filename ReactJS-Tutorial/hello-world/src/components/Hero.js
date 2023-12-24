import React from "react";

const Hero = ({ heroName }) => {
    if (heroName === "Jocker") {
        throw new Error("Not a error");
    }

    return <div>{heroName}</div>;
};

export default Hero;
