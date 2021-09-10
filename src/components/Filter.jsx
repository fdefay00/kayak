import React, { useState } from 'react'
import '../styles/filter.css'

export default function Filter({ setFilters }) {
  const [form, setForm] = useState({
    OW: false,
    ST: false,
    SA: false,
  })
  const handleChange = (e) => {
    const name = e.target.name
    setForm((prevForm) => {
      const form = { ...prevForm, [name]: e.target.checked }
      const filters = Object.keys(form).filter((key) => form[key])
      console.log({ form, filters })
      setFilters(filters)

      return form
    })
  }

  return (
    <div className="filter">
      <h3>Filter by Alliances</h3>
      <form>
        <input type="checkbox" name="OW" checked={form.oneWorld} onChange={handleChange} />
        <label>Oneworld</label>
        <input type="checkbox" name="ST" checked={form.skyTeam} onChange={handleChange} />
        <label>Sky Team</label>
        <input type="checkbox" name="SA" checked={form.starAlliance} onChange={handleChange} />
        <label>Star Alliance</label>
      </form>
    </div>
  )
}
