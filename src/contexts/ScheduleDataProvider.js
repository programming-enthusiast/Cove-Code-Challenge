import React, { useState } from 'react'
import ScheduleDataContext from './ScheduleDataContext'

export default function ScheduleDataProvider({ children }) {
  const [scheduleData, setScheduleData] = useState([])

  return (
    <ScheduleDataContext.Provider value={{ scheduleData, setScheduleData }}>
      {children}
    </ScheduleDataContext.Provider>
  )
}
