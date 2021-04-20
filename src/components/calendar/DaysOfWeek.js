import React from "react"

import DayOfWeek from "./DayOfWeek"

const DAYS_OF_WEEK =  [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
]

export default function DaysOfWeek() {

  return (
    <div className="calendar-days-of-week">
      {
        DAYS_OF_WEEK.map(day => 
          (<DayOfWeek day={day} key={day}/>)
        )
      }
    </div>
  )
}