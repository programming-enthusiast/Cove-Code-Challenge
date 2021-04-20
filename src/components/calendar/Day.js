import React, { useContext } from "react"
import { useHistory } from 'react-router-dom'
import formatDate from "date-fns/format"
import isWeekend from "date-fns/is_weekend"
import isSunday from "date-fns/is_sunday"
import isSaturday from "date-fns/is_saturday"
import parseDate from 'date-fns/parse'
import isSameDay from "date-fns/is_same_day"
import isSameMonth from "date-fns/is_same_month"
import isSameYear from "date-fns/is_same_year"
import ScheduleDataContext from '../../contexts/ScheduleDataContext'

export default function Day({ date, onDayClick}) {
  const history = useHistory()
  
  const { scheduleData, currentRoomId } = useContext(ScheduleDataContext)
  
  const filteredSchedules = scheduleData.filter((schedule) => {
    const scheduleDate = parseDate(schedule.start)
    if (isSameDay(scheduleDate, date) && isSameMonth(scheduleDate, date) && isSameYear(scheduleDate, date) && schedule.room.id === currentRoomId) {
      return schedule
    }
  })

  const handleDayClick = () => {
    const dateParam = formatDate(date, "YYYY-MM-DD")
    history.push('/daily_schedule/' + dateParam)
  }

  return (
    <div className={`calendar__day_container ${isSunday(date) ? "sunday" : null} ${isSaturday(date) ? "saturday" : null}`} onClick={handleDayClick}>
      <span style={{font: "bold", fontSize: "20px"}}>
        {formatDate(date, "D")}
      </span>
      <div>
        {
          filteredSchedules.map((schedule) => {
            return (
              <div>
                {formatDate(parseDate(schedule.start), 'hh:mm')} ~ {formatDate(parseDate(schedule.end), 'hh:mm')}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}