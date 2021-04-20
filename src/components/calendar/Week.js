import React from "react"
import eachDay from "date-fns/each_day"
import endOfWeek from "date-fns/end_of_week"
import startOfWeek from "date-fns/start_of_week"

import Day from "./Day"

export default function Week({ date, onDayClick }) {


  const start = startOfWeek(date, { weekStartsOn: 0 })
  const end = endOfWeek(date, { weekStartsOn: 0 })

  return (
    <div className="calendar__week_container">
      {
        eachDay(start, end).map((day) => {
          return <Day 
            date={day} 
            onDayClick={onDayClick} 
          />
        })
      }
    </div>
  )
}