import './style.css'
import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import ScheduleDataContext from '../../contexts/ScheduleDataContext'
import PageNavigator from './PageNavigator'
import ListingCard from './ListingCard'
import moment from 'moment'


const roomsPerPage = 9

export default function RoomsList() {
  const history = useHistory()
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const { roomList, setCurrentRoomId } = useContext(ScheduleDataContext)

  const pageCount = roomList ? Math.ceil(roomList.length / 9.0) : 0

  const handleRoomClick = (roomId) => {
    setCurrentRoomId(roomId)
    history.push('/monthly_schedule')
  }

  const handlePageChange = (pageNum) => {
    setCurrentPageNumber(pageNum)
  }
  
  return (
    <div className="room-list__container">
      <div className="room-list__title"><h1>Select a room to view reservations</h1></div>
      <div className="room-list__grid_view">
        {
          roomList.map((room, index) => {
            if (index >= (currentPageNumber - 1) * roomsPerPage && index < currentPageNumber * roomsPerPage) {
              return (
                <ListingCard name={room.name} imageUrl={room.imageUrl} onClick={() => handleRoomClick(room.id)} key={room.id} />
              ) 
            }
          })
        }
      </div>
      <PageNavigator totalPages={pageCount} currentPageNumber={currentPageNumber} onPageChange={handlePageChange}/>
    </div>
  )
}