import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { ReactComponent as RoomsIcon } from '../../../assets/svg/rooms.svg'
import { ReactComponent as DailyScheduleIcon } from '../../../assets/svg/daily_schedule.svg'
import { ReactComponent as MonthlyScheduleIcon } from '../../../assets/svg/monthly_schedule.svg'

export default function Sidebar() {
  const location = useLocation()
  const history = useHistory()
  
  const handleDailyScheduleClick = () => {
    history.push('/daily_schedule')
  }

  const handleMonthlyScheduleClick = () => {
    history.push('/monthly_schedule')
  }

  const handleHomeClick = () => {
    history.push('/')
  }

  return (
    <div className="sidebar__container">
      <div className={`sidebar__item-container ${location.pathname === '/' ? 'selected' : ''}`} onClick={handleHomeClick}>
        <div className="sidebar__item-icon"><RoomsIcon fill="white"/></div>
        <div>Rooms</div>
      </div>
      <div className={`sidebar__item-container ${location.pathname.includes('/monthly_schedule') ? 'selected' : ''}`} onClick={handleMonthlyScheduleClick}>
        <div className="sidebar__item-icon"><MonthlyScheduleIcon fill="white"/></div>
        <div>Monthly Schedule</div>
      </div>
      <div className={`sidebar__item-container ${location.pathname.includes('/daily_schedule') ? 'selected' : ''}`} onClick={handleDailyScheduleClick}>
        <div className="sidebar__item-icon"><DailyScheduleIcon fill="white"/></div>
        <div>Daily Schedule</div>
      </div>
    </div>
  )
}
