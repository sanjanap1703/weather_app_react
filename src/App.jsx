
import './App.css'
import { useContext, useState } from 'react'
import { WeatherContext } from './context/WeatherContext.jsx'
import Card from './components/Card.jsx'
import Search from './components/Search.jsx'
import Button from './components/Button.jsx'
function App() {
  
  const res=useContext(WeatherContext)
  const onCityChange=(e)=>{
   
    res.setCity(e.target.value)
    console.log("oncitychange ")
  }
  const onConfirm=()=>{
    res.fetchData()
    console.log("confirm")
  }
  const refresh=()=>{
    res.setCity(null)
  }
  return (
    <>
    <Search value={res.city} onChange={onCityChange}/><Button value="search" onClick={onConfirm}/>
  <Card/> 
  <Button value="refresh" onClick={refresh}/>
    </>
  )
}

export default App
