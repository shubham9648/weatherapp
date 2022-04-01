import React from 'react';
import './App.css';
import axios from 'axios'
import Data from './Data';


function App() {
   const [city, setCity] = React.useState("")
   const [data, setData] = React.useState({
    description:"",
    country:"",
    temp:0,
    pressure:0,
    humidity:0,
    feels_like:0,
    temp_max:0,
    temp_min:0,
    sunrise:0,
    sunset:0
   })
  const handleClick = () =>{
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b71704e3be0cf8d20142fd546b9db86`)
  .then((res)=>{
    setData({
    description:res.data.weather[0],
    country:res.data.sys.country,
    temp:res.data.main.temp,
    pressure:res.data.main.pressure,
    humidity:res.data.main.humidity,
    feels_like:res.data.main.feels_like,
    temp_max:res.data.main.temp_max,
    temp_min:res.data.main.temp_min,
    sunrise:res.data.sys.sunrise,
    sunset:res.data.sys.sunset
    })
  })
 }
   //  const finalData = await res.json()
  //  console.log(finalData) 
    
    
    React.useEffect(()=>{
      // getData()
    },[])
  return (
    <>
    <div className='header'>
      <h1 className='main-heading'>Weather App in ReactJS</h1>
      <input type="text" className='form' value={city} 
      onChange={(event)=>{
        setCity(event.target.value)  
      }}/>
      <button type='submit' onClick={handleClick}>get Tempreture</button>
      </div>
      <Data text={data} />
        
      
    </>
  );
}

export default App;
