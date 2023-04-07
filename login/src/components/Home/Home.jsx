import React from 'react';
import Navbar2 from './Navbar2.jsx';
import Slider from './Slider.jsx';
import  "./Home.css";
import { useNavigate } from 'react-router';
function Home() {

  //Navigation path is in App.js 
  const navigate = useNavigate();
  const toggleExplore=()=> {
    navigate("/Explore");
  }
  return (
    <div>
      <Navbar2/>
       <div className = "containe">
        {/* <h1>Interface UI</h1> */}
        {/* <h1>.</h1>
        <button className="Signout" >Signout</button> */}
       </div>
       <section className="section__1">
        <div className="wrapper">
          <div className="head__text">
            <h1 className="head__title">Himachal Harvest</h1>
            <h2 className="head__desc">Our Farm Our Promise</h2>
          </div>
          <button className="exp__btn"onClick={toggleExplore}>
            <p>Explore</p>
          </button>
          <div className="mouse">
            <div className="mouse__wheel"></div>
          </div>
        </div>
      </section>
      <Slider/>
    </div>
  )
}

export default Home
