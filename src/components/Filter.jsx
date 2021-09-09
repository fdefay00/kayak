import React from 'react'
import '../styles/filter.css'

export default function Filter() {
  return (
    <div className="filter">
      <h3>Filter by Alliances</h3>
      <form>
        <input type="checkbox" name="Oneworld" value="Oneworld" />
        <label>Oneworld</label>
        <input type="checkbox" name="Sky Team" value="Sky Team" />
        <label>Sky Team</label>
        <input type="checkbox" name="Star Alliance" value="Star Alliance" />
        <label>Star Alliance</label>
      </form>
    </div>
  )
}
