import React from "react"
import MonthlySchedule from "./MonthlySchedule"
import ScheduleDataContext from "../contexts/ScheduleDataContext"
import renderer from "react-test-renderer"
import { ROOM_LIST, SCHEDULE_DATA } from '../const'

describe("MonthlySchedule Component", () => {
  let renderedComponent

  let contextValue = { scheduleData: SCHEDULE_DATA, roomList: ROOM_LIST}

  beforeAll(() => {
    renderedComponent = renderer.create(
      <ScheduleDataContext.Provider value={contextValue}>
        <MonthlySchedule/>
      </ScheduleDataContext.Provider>
      )
  })

  it("should render correctly", () => {
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  })
})
