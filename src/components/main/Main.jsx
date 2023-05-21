import React from 'react'
import './main.css'
import background from './backgroundImage.png';
import Lottie from "lottie-react";
import anime from "./144553-building-website.json";

const Main = () => {
  return (
    <div className="main">
      <div className="main-background" style={{ backgroundColor: `#EEEEEE` }} />
      <div className="main-container">
        <div className="main-content">
          <div className="main-text">
            Мобильді қосымшалар интерфейсінің графикалық элементтерін әзірлеу
          </div>
          <div className="main-text-2">
            <Lottie animationData={anime} loop={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main