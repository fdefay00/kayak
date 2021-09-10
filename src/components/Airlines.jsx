import React, { useState, useEffect } from 'react'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

import Airline from './Airline'
import '../styles/airlines.css'

export default function Airlines({ filters }) {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    axios({
      url: 'http://kayak.com/h/mobileapis/directory/airlines/homework',
      adapter: jsonpAdapter,
      callbackParamName: 'jsonp',
    }).then((res) => {
      setAirlines(res.data)
      // setFilteredAirlines(res.data)
      // setDisplayedAirlines(res.data.slice(0, increment))
    })
  }, [])

  const filterBy = (airline) => {
    return filters.length > 0 ? filters.includes(airline.alliance) : true
  }
  const filteredAirlines = airlines.filter(filterBy)
  const increment = 9
  const displayedAirlines = filteredAirlines.slice(0, increment)
  console.log(displayedAirlines)

  return (
    <div className="airlines-container">
      {displayedAirlines.map((airline, id) => (
        <Airline key={id} airline={airline} />
      ))}
    </div>
  )
}
