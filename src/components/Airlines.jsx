import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

import Airline from './Airline'
import '../styles/airlines.css'

export default function Airlines() {
  const [, setAirlines] = useState([])
  const [displayedAirlines, setDisplayedAirlines] = useState([])
  const increment = 9

  useEffect(() => {
    axios({
      url: 'http://kayak.com/h/mobileapis/directory/airlines/homework',
      adapter: jsonpAdapter,
      callbackParamName: 'jsonp', // optional, 'callback' by default
    }).then((res) => {
      console.log(res.data.slice(0, 9))
      setAirlines(res.data)
      setDisplayedAirlines(res.data.slice(0, increment))
    })
  }, [])

  return (
    <div className="airlines-container">
      {displayedAirlines.map((airline, id) => (
        <Airline key={id} airline={airline} />
      ))}
    </div>
  )
}
