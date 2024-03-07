import { useState } from 'react'
import rickLogo from '../assets/rick-svgrepo-com.svg'
import mortyLogo from '../assets/morty-svgrepo-com.svg'
import VideoComponent from '../VideoComponent'



const HomePage = () => {
    return (
    <>
    <div className="mainLogo">
    <a href="https://www.adultswim.com/videos/rick-and-morty" target="_blank">
    <img src={mortyLogo} className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.youtube.com/watch?v=Hj5z5AohDec&pp=ygULcGlja2xlIHJpY2s%3D" target="_blank">
    <img src={rickLogo} className="logo react" alt="React logo" />
    </a>
    </div>
    <h1 className="mainH1">Rick and Morty</h1>
    <VideoComponent />
    </>
    )
};

export default HomePage;