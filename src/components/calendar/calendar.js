import './style.css'
import { useState } from "react"
import addMonths from "date-fns/add_months"

import MonthHeader from "./MonthHeader"
import Month from "./Month"



export default function Calendar({ month, onMonthChange, onDayClick }) {

  const handleActiveMonthChange = (offset) => {
    onMonthChange(addMonths(month, offset))
  }

  return (
    <div className="calendar_container">      
      <MonthHeader
        activeMonth={month} 
        onActiveMonthChange={handleActiveMonthChange}
      />
      <Month activeMonth={month} onDayClick={onDayClick}/>
    </div>
  )
}