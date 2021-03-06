import React from "react"
import { Route } from "react-router-dom";
import DailySchedule from "./DailySchedule"
import ScheduleDataContext from "../contexts/ScheduleDataContext"
import renderer from "react-test-renderer"
import { renderWithProviders } from "../test-utils/test-utils";
import { ROOM_LIST, SCHEDULE_DATA } from '../const'

describe("DailySchedule Component", () => {
  let renderedComponent

  let contextValue = { scheduleData: SCHEDULE_DATA, roomList: ROOM_LIST}

  beforeAll(() => {
    renderedComponent = renderWithProviders(
      <ScheduleDataContext.Provider value={contextValue}>
        <Route path="/daily_schedule/:roomId/:date">
          <DailySchedule/>
        </Route>
      </ScheduleDataContext.Provider>,
      {
        route: "/daily_schedule/401662b9-b110-4159-a4f2-ebd955f3b1f4/2021-04-20"
      })
  })

  it("should render correctly", () => {
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  })
})
