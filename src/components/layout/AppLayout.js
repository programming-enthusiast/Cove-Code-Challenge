import './style.css'
import React from 'react'
import Sidebar from './sidebar/Sidebar'

export default function AppLayout({ children }) {
  return (
    <div className="app-layout__container">
      <Sidebar/>
      <div className="app-layout__page-container">
        {children}
      </div>
    </div>
  )
}
