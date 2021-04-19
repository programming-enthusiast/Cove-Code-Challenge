import './style.css'
import React from 'react'

import RoomsList from '../components/rooms_list/RoomsList'
import Calendar from '../components/calendar/calendar'

export default function MonthlySchedulePage() {
  return (
    <div className="page-container">
      <Calendar/>
    </div>
  )
}
