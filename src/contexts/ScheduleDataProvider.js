import React, { useState } from 'react'
import ScheduleDataContext from './ScheduleDataContext'

export default function ScheduleDataProvider({ children }) {
  const [scheduleData, setScheduleData] = useState([])
  const [currentRoomId, setCurrentRoomId] = useState(null)

  return (
    <ScheduleDataContext.Provider value={{ scheduleData, setScheduleData, currentRoomId, setCurrentRoomId }}>
      {children}
    </ScheduleDataContext.Provider>
  )
}
