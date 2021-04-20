import React from "react"
import Calendar from "./Calendar"
import ScheduleDataContext from "../../contexts/ScheduleDataContext"
import renderer from "react-test-renderer"
import { ROOM_LIST, SCHEDULE_DATA } from '../../const'

describe("Calendar Component", () => {
  let renderedComponent

  let contextValue = { scheduleData: SCHEDULE_DATA, roomList: ROOM_LIST}

  beforeAll(() => {
    renderedComponent = renderer.create(
      <ScheduleDataContext.Provider value={contextValue}>
        <Calendar/>
      </ScheduleDataContext.Provider>
      )
  })

  it("should render correctly", () => {
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  })
})
