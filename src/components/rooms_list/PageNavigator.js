import React, { useState } from 'react'
import { ReactComponent as PrevBtn} from '../../assets/svg/prev_btn.svg'
import { ReactComponent as NextBtn} from '../../assets/svg/next_btn.svg'

export default function PageNavigator({ totalPages, currentPageNumber, onPageChange }) {

  const handlePageNumberClick = (pageNum) => {
    setCurrentPageNumber(pageNum)
  }

  const handlePrevPageClick = () => {
    if (currentPageNumber > 1)
      setCurrentPageNumber(currentPageNumber - 1)
  }

  const handleNextPageClick = () => {
    if (currentPageNumber < totalPages){
      setCurrentPageNumber(currentPageNumber + 1)
      onPageChange(currentPageNumber)
    }
  }

  const renderPageNumber = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++ ) {
      if (i === currentPageNumber) {
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

  return (
    <div className="room-list__page-stepper__wrapper">
      <div className="room-list__page-stepper__container" key="stepper__container">
        <div className="room-list__page-stepper__previous-btn" onClick={handlePrevPageClick}>
          <PrevBtn fill={currentPageNumber === 1 ? "rgb(226, 226, 226)": "black"}/>
        </div>
        <div className="room-list__page-stepper__spacer"></div>
        {
          renderPageNumber()
        }
        <div className="room-list__page-stepper__spacer"></div>
        <div className="room-list__page-stepper__next-btn" onClick={handleNextPageClick}>
          <NextBtn fill={currentPageNumber === totalPages ? "rgb(226, 226, 226)": "black"}/>
        </div>
      </div>
    </div >
  )
}
