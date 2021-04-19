import './style.css'
import React, { useState } from 'react'
import { ReactComponent as PrevBtn} from '../../assets/svg/prev_btn.svg'
import { ReactComponent as NextBtn} from '../../assets/svg/next_btn.svg'
import moment from 'moment'

const roomList = [
  {
    "id":"401662b9-b110-4159-a4f2-ebd955f3b1f4",
    "name":"Room A",
    "imageUrl":"https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/f96efd3f11aadb34135bb1f0aecf9667_Quincy%20Room.jpg"
  },
  {
    "id": "70866847-3a55-407e-9973-841ac4c16a29",
    "name":"Room B",
    "imageUrl":"https://staging.cove.is/parse/files/hRKEvW2lN74k5nCg6p2XtmiWRNHycE2pHpXpELMX/d0d19da4aa88734291279f5fe7a836e7_Wakefield%20Room.jpg"
  },
]

const schedulesPerPage = 9

export default function RoomsList() {

  const [currentPage, setCurrentPage] = useState(1)

  const pageCount = Math.ceil(roomList.length / 9.0)
  

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
        pageNumbers.push(<div className="room-list__page-stepper__page selected">
          {i}
        </div>)
      } else {
        pageNumbers.push(<div className="room-list__page-stepper__page" onClick={() => handlePageNumberClick(i)}>
          {i}
        </div>)
      }
    }
    return pageNumbers
  }
  
  return (
    <div className="room-list__container">
      <div className="room-list__title"><h1>Rooms</h1></div>
      <div className="room-list__grid_view">
        {
          roomList.map((schedule, index) => {
            if (index >= (currentPage - 1) * schedulesPerPage && index < currentPage * schedulesPerPage) {
              return (
                  <div className="room-list__listing-card">
                    <div className="room-list__listing-card__img-aspect-ratio-box">
                      <img className="room-list__listing-card__image" src={schedule.imageUrl} />
                    </div>
                    <div className="room-list__listing-card-info-section">
                      <div className="room-list__listing-card-info-section__room-name">
                        {schedule.name}
                      </div>
                    </div>
                  </div>
                ) 
            }
          })
        }
      </div>
      <div className="room-list__page-stepper__wrapper">
        <div className="room-list__page-stepper__container">
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