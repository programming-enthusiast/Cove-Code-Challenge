import './style.css'
import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom"
import { ReactComponent as PrevBtn} from '../../assets/svg/prev_btn.svg'
import { ReactComponent as NextBtn} from '../../assets/svg/next_btn.svg'
import ScheduleDataContext from '../../contexts/ScheduleDataContext'
import moment from 'moment'


const schedulesPerPage = 9

export default function RoomsList() {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState(1)
  const { roomList, setCurrentRoomId } = useContext(ScheduleDataContext)


  const pageCount = roomList ? Math.ceil(roomList.length / 9.0) : 0
  

  const handlePageNumberClick = (pageNum) => {
    setCurrentPage(pageNum)
  }

  const handlePrevPageClick = () => {
    if (currentPage > 1)
      setCurrentPage(currentPage - 1)
  }

  const handleNextPageClick = () => {
    if (currentPage < pageCount)
      setCurrentPage(currentPage + 1)
  }

  const renderPageNumber = () => {
    const pageNumbers = []
    for (let i = 1; i <= pageCount; i++ ) {
      if (i === currentPage) {
        pageNumbers.push(<div className="room-list__page-stepper__page selected" key={i}>
          {i}
        </div>)
      } else {
        pageNumbers.push(<div className="room-list__page-stepper__page" onClick={() => handlePageNumberClick(i)} key={i}>
          {i}
        </div>)
      }
    }
    return pageNumbers
  }

  const handleRoomClick = (roomId) => {
    setCurrentRoomId(roomId)
    history.push('/monthly_schedule')
  }
  
  return (
    <div className="room-list__container">
      <div className="room-list__title"><h1>Select a room to view reservations</h1></div>
      <div className="room-list__grid_view">
        {
          roomList.map((room, index) => {
            if (index >= (currentPage - 1) * schedulesPerPage && index < currentPage * schedulesPerPage) {
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
      <div className="room-list__page-stepper__wrapper">
        <div className="room-list__page-stepper__container" key="stepper__container">
          <div className="room-list__page-stepper__previous-btn" onClick={handlePrevPageClick}>
            <PrevBtn fill={currentPage === 1 ? "rgb(226, 226, 226)": "black"}/>
          </div>
          <div className="room-list__page-stepper__spacer"></div>
          {
            renderPageNumber()
          }
          <div className="room-list__page-stepper__spacer"></div>
          <div className="room-list__page-stepper__next-btn" onClick={handleNextPageClick}>
            <NextBtn fill={currentPage === pageCount ? "rgb(226, 226, 226)": "black"}/>
          </div>
        </div>
      </div >
    </div>
  )
}