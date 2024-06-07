import { createContext, useEffect, useState } from "react";
import { getApiData } from "../api";
export const WeatherContext=createContext(null)
export const WeatherContextProvider=(props)=>{
    const[city,setCity]=useState(null)
    const[data,setData]=useState(null)
    const fetchData=async()=>{
        if(city)
        {
        const response=await getApiData(city)
        setData(response)
        }
       
        
    }
   console.log(city)
    return(
        <WeatherContext.Provider value={{data,setCity,fetchData,city}}>
          {props.children}
        </WeatherContext.Provider>
    )
}