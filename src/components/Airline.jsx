import React, { useState } from 'react'
import '../styles/airline.css'

export default function Airline({ airline }) {
  return (
    <div className="airline-tile">
      <img src={'https://kayak.com' + airline.logoURL} className="tile-img" alt={airline.site} />
      <h1>{airline.name}</h1>
    </div>
  )
}
