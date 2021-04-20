import './style.css'
import React, { useContext } from 'react'
import RoomsList from '../components/rooms_list/RoomsList'

export default function HomePage() {
  document.title = 'Cove Rooms'
  return (
    <div className="page-container">
      <RoomsList/>
    </div>
  )
}
