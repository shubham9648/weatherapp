import React from "react";
import './App.css';
const Data = ({text}) =>{
    return (
        <>
        <section className="main-container">
      <div className='child-container'>
          <h1 className="des">Country</h1>
          <h2 className="two">{text.country}</h2>
        </div>
        
         <div className='child-container'>
          <h1 className="des">Current Tempreture</h1>
          <h2 className="two">{text.temp}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Feels Like</h1>
          <h2 className="two">{text.feels_like}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Minimum Tempreture</h1>
          <h2 className="two">{text.temp_min}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Maximum Tempreture</h1>
          <h2 className="two">{text.temp_max}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Current Humidity</h1>
          <h2 className="two">{text.humidity}</h2>
        </div>
       
        <div className='child-container'>
          <h1 className="des">Sunrise</h1>
          <h2 className="two">{text.sunrise}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Sunset</h1>
          <h2 className="two">{text.sunset}</h2>
        </div> 
      
    </section>
    <footer>
        <h3>Developed and created by Shubham Tiwari</h3>
    </footer>
        </>
    )
}

export default Data