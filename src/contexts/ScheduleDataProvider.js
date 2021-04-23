import React, { useState } from 'react'
import ScheduleDataContext from './ScheduleDataContext'

export default function ScheduleDataProvider({ children }) {
  const [scheduleData, setScheduleData] = useState([])
  const [currentRoomId, setRoomId] = useState(null)
  const [roomList, setRoomList] = useState([])

  const setCurrentRoomId = (roomId) => { 
    localStorage.setItem('roomId', roomId)
    setRoomId(roomId)
  }

  return (
    <ScheduleDataContext.Provider value={{ scheduleData, setScheduleData, currentRoomId, setCurrentRoomId, roomList, setRoomList }}>
      {children}
    </ScheduleDataContext.Provider>
  )
}
