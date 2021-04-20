import React from 'react'

export default React.createContext({
  scheduleData: null,
  setSchedulData: undefined,
  roomList: [],
  setRoomList: undefined,
  currentRoomId: null,
  setCurrentRoomId: undefined
})