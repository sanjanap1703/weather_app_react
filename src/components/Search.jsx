import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'

function Search(props) {
 

  return (
    <div>
        <input
        type='text'
        className='input-field'
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        />
    </div>
  )
}

export default Search