import React from 'react'
import '../styles/airline.css'

export default function Airline({ airline }) {
  return (
    <div className="airline-tile">
      <img src={airline.logoURL} alt="logo" />
      <h1>{airline.name}</h1>
    </div>
  )
}
