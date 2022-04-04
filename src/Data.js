import React from "react";
import './App.css';
const Data = (props) =>{
  console.log(props)
    return (
        <>
        <section className="main-container">
      <div className='child-container'>
          <h1 className="des">Country</h1>
          <h2 className="two">{props.country}</h2>
        </div>
        
          <div className='child-container'>
          <h1 className="des">Current Tempreture</h1>
          <h2 className="two">{props.temp -273.3}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Feels Like</h1>
          <h2 className="two">{props.feels_like-273.3}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Minimum Tempreture</h1>
          <h2 className="two">{props.temp_min-273.3}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Maximum Tempreture</h1>
          <h2 className="two">{props.temp_max-273.3}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Current Humidity</h1>
          <h2 className="two">{props.humidity}</h2>
        </div>
       
        <div className='child-container'>
          <h1 className="des">Sunrise</h1>
          <h2 className="two">{props.sunrise}</h2>
        </div>
        <div className='child-container'>
          <h1 className="des">Sunset</h1>
          <h2 className="two">{props.sunset}</h2>
        </div> 
       
    </section>
    <footer>
        <h3>Developed and created by Shubham Tiwari</h3>
    </footer>
        </>
    )
}

export default Data