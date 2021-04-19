import React from "react"

export default function DayOfWeek({ className, day }) {
  return (
    <div className={className} style={{flex: "1"}}>
      <div className="calendar-day-of-week"
        style={{
          border: "1px solid black",
          textAlign: "center"
        }}
      >
        {day}
      </div>
    </div>
  )
}