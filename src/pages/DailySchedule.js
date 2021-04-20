import React, { useContext } from 'react';
import { useParams } from 'react-router'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments
} from '@devexpress/dx-react-scheduler-material-ui';
import ScheduleDataContext from '../contexts/ScheduleDataContext'
import formatDate from 'date-fns/format'
import isSameDay from "date-fns/is_same_day"
import isSameMonth from "date-fns/is_same_month"
import isSameYear from "date-fns/is_same_year"
import parseDate from 'date-fns/parse'
import { getRoomName } from '../const'


export default function DailySchedule({ props }) {
  
  const { date } = useParams()
  const { scheduleData, currentRoomId } = useContext(ScheduleDataContext)

  const schedulerData = []

  scheduleData.filter((schedule) => {
    const scheduleDate = parseDate(schedule.start)
    if (isSameDay(scheduleDate, date) && isSameMonth(scheduleDate, date) && isSameYear(scheduleDate, date) && schedule.room.id === currentRoomId) {
      schedulerData.push({
        startDate: formatDate(parseDate(schedule.start), 'YYYY-MM-DDThh:mm'),
        endDate: formatDate(parseDate(schedule.end), 'YYYY-MM-DDThh:mm'),
        title: schedule.room.name
      })
    }
  })

  if (!date) {
    date = formatDate(new Date(), 'YYYY-MM-DD')
  }

  document.title = getRoomName(currentRoomId) + ' - Daily Calendar'
  return (
    <div className="page-container">
      <Paper>
        <Scheduler data={schedulerData}>
          <ViewState currentDate={date} />
          <DayView startDayHour={0} endDayHour={24} />
          <Appointments />
        </Scheduler>
      </Paper>
    </div>
  )
}
