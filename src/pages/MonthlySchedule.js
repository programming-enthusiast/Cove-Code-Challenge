import './style.css'
import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useHistory } from 'react-router-dom'
import Calendar from '../components/calendar/Calendar'
import ScheduleDataContext from '../contexts/ScheduleDataContext'
import parseDate from 'date-fns/parse'
import formatDate from "date-fns/format"
import { getRoomName } from '../const'

export default function MonthlySchedulePage() {
  const history = useHistory()
  let { date } = useParams()
  const { currentRoomId } = useContext(ScheduleDataContext)
  const [currentMonth, setCurrentMonth] = useState(date ? parseDate(date) : new Date())

  document.title = getRoomName(currentRoomId) + ' - Monthly Calendar'

  const handleMonthChange = (month) => {
    history.push(`/monthly_schedule/${formatDate(month, 'YYYY-MM')}`)
    setCurrentMonth(month)
  }

  return (
    <div className="page-container">
      <h1>{document.title}</h1>
      <Calendar month={currentMonth} onMonthChange={handleMonthChange} />
    </div>
  )
}
