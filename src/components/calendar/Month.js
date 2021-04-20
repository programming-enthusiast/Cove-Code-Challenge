import React from "react"
import addDays from "date-fns/add_days"
import endOfMonth from "date-fns/end_of_month"
import endOfWeek from "date-fns/end_of_week"
import isBefore from "date-fns/is_before"
import isSameDay from "date-fns/is_same_day"
import startOfMonth from "date-fns/start_of_month"
import startOfWeek from "date-fns/start_of_week"

import Week from "./Week"
import DaysOfWeek from "./DaysOfWeek"

export default function Month({ activeMonth, onDayClick }) {
  const weeks = []
  let date = startOfWeek(startOfMonth(activeMonth), { weekStartsOn: 0 })
  const end = endOfWeek(endOfMonth(activeMonth), { weekStartsOn: 0 })

  while (isBefore(date, end) || isSameDay(date, end)) {
    weeks.push(date)
    date = addDays(date, 7)
  }
  return (
    <div className="calendar_grid_container">
      <DaysOfWeek/>
      {
        weeks.map(week => (
          <Week date={week} onDayClick={onDayClick} activeMonth={activeMonth}/>
        ))
      }
    </div>
  )
}