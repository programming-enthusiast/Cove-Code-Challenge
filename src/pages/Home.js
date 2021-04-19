import './style.css'
import React from 'react'
import RoomsList from '../components/rooms_list/RoomsList'

export default function HomePage() {
  return (
    <div className="page-container">
      <RoomsList/>
    </div>
  )
}
