import React from "react"

import DayOfWeek from "./DayOfWeek"

const DAYS_OF_WEEK =  [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
]

export default function DaysOfWeek() {

  return (
    <div className="calendar-days-of-week"
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      {
        DAYS_OF_WEEK.map(day => 
          (<DayOfWeek day={day}/>)
        )
      }
    </div>
  )
}