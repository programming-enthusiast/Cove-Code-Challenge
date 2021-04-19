import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as DailyScheduleIcon } from '../../../assets/svg/daily_schedule.svg'

export default function Sidebar() {
  return (
    <div className="sidebar__container">
      <Link to="/">
        <div className="sidebar__item-container">
          <div className="sidebar__item-icon"><DailyScheduleIcon fill="white"/></div>
          <div>Home</div>
        </div>
      </Link>
      <Link to="/monthly_schedule">
        <div className="sidebar__item-container">
          <div className="sidebar__item-icon"><DailyScheduleIcon fill="white"/></div>
          <div>Monthly Schedule</div>
        </div>
      </Link>
      <Link to="/daily_schedule">
        <div className="sidebar__item-container">
          <div className="sidebar__item-icon"><DailyScheduleIcon fill="white"/></div>
          <div>Daily Schedule</div>
        </div>
      </Link>
    </div>
  )
}
