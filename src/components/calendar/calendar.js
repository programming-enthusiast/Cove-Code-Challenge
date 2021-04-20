import './style.css'
import { useState } from "react"
import addMonths from "date-fns/add_months"

import MonthHeader from "./MonthHeader"
import Month from "./Month"



export default function Calendar({ onDayClick }) {

  const [activeMonth, setActiveMonth] = useState(new Date())

  const handleActiveMonthChange = (offset) => {
    setActiveMonth(addMonths(activeMonth, offset))
  }

  return (
    <div className="calendar_container">      
      <MonthHeader
        activeMonth={activeMonth} 
        onActiveMonthChange={handleActiveMonthChange}
      />
      <Month activeMonth={activeMonth} onDayClick={onDayClick}/>
      
    </div>
  )
}