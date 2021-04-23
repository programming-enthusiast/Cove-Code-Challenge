import './style.css'
import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import ScheduleDataContext from '../../contexts/ScheduleDataContext'
import PageNavigator from './PageNavigator'
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
                <div className="room-list__listing-card" onClick={() => handleRoomClick(room.id)} key={room.id}>
                  <div className="room-list__listing-card__img-aspect-ratio-box">
                    <img className="room-list__listing-card__image" src={room.imageUrl} />
                  </div>
                  <div className="room-list__listing-card-info-section">
                    <div className="room-list__listing-card-info-section__room-name">
                      {room.name}
                    </div>
                  </div>
                </div>
              ) 
            }
          })
        }
      </div>
      <PageNavigator totalPages={pageCount} currentPageNumber={currentPageNumber} onPageChange={handlePageChange}/>
    </div>
  )
}