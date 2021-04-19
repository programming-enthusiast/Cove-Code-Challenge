import './App.css'
import React, { useEffect, useContext } from 'react'
import Axios from 'axios'
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/Home'
import MonthlySchedulePage from './pages/MonthlySchedule'
import DailySchedulePage from './pages/DailySchedule'
import ScheduleDataContext from './contexts/ScheduleDataContext'
import { API_URL } from './const'

function App() {

  const { scheduleData, setScheduleData } = useContext(ScheduleDataContext)

  useEffect(() => {
    Axios.get(API_URL).then((response) => {
      setScheduleData(response.data)
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
            <Route exact path="/monthly_schedule">
              <MonthlySchedulePage/>
            </Route>
            <Route exact path="/daily_schedule">
              <DailySchedulePage/>
            </Route>
          </Switch>
        </AppLayout>
      </div>
    </BrowserRouter>
  )
}

export default App
