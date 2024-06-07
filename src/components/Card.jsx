import React from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { useContext } from 'react'
function Card() {
    const val=useContext(WeatherContext)
   
    console.log(val.data)
  return (
    <div className='card'>
        {val.data && <img src={`https://openweathermap.org/img/wn/${val.data.weather[0].icon}@2x.png`}/>}
        <h3>{val.data && val.data.main.temp}</h3>
        <h5>{val.data && val.data.name}</h5>
    </div>
  )
}

export default Card