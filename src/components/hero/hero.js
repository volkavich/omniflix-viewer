import "./hero.css"
import Header from '../header/header';
import React from "react";
import ImageGallery from "../imageGallery/imageGallery";

function Hero() {
    return (
        <div className="hero-base">
            <Header />
            <div className="welcome-holder">
            <h1 className="hero-text red">W</h1>
            <h1 className="hero-text yellow">E</h1>
            <h1 className="hero-text green">L</h1>
            <h1 className="hero-text orange">C</h1>
            <h1 className="hero-text white">O</h1>
            <h1 className="hero-text violet">M</h1>
            <h1 className="hero-text pink">E</h1>
            </div>
            

            <ImageGallery/>
        </div>
    );
}

export default Hero;