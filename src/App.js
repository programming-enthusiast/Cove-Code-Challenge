import './App.css'
import React, { useEffect, useContext } from 'react'
import Axios from 'axios'
import { BrowserRouter, Switch, Link, Route, Redirect } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import HomePage from './pages/Home'
import MonthlySchedulePage from './pages/MonthlySchedule'
import DailySchedulePage from './pages/DailySchedule'
import ScheduleDataContext from './contexts/ScheduleDataContext'
import formatDate from 'date-fns/format'
import { API_URL } from './const'

function App() {

  const { scheduleData, setScheduleData, currentRoomId } = useContext(ScheduleDataContext)

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
              {
                currentRoomId ? <MonthlySchedulePage/> : <Redirect to="/"/>
              }
            </Route>
            <Route exact path="/daily_schedule">
              {
                <Redirect to={"/daily_schedule/" + formatDate(new Date(), 'YYYY-MM-DD')}/>
              }
            </Route>
            <Route exact path="/daily_schedule/:date">
              {
                currentRoomId ? <DailySchedulePage/> : <Redirect to="/"/>
              }
            </Route>
          </Switch>
        </AppLayout>
      </div>
    </BrowserRouter>
  )
}

export default App
