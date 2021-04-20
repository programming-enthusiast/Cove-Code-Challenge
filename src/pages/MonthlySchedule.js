import './style.css'
import React, { useContext } from 'react'

import Calendar from '../components/calendar/Calendar'
import ScheduleDataContext from '../contexts/ScheduleDataContext'
import { getRoomName } from '../const'

export default function MonthlySchedulePage() {
  const { currentRoomId } = useContext(ScheduleDataContext)
  document.title = getRoomName(currentRoomId) + ' - Monthly Calendar'
  return (
    <div className="page-container">
      <h1>{document.title}</h1>
      <Calendar/>
    </div>
  )
}
