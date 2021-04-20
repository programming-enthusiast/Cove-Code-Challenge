import React from "react"
import { Route } from "react-router-dom";
import AppLayout from "./AppLayout"
import { renderWithProviders } from "../../test-utils/test-utils";


describe("AppLayout Component", () => {
  let renderedComponent

  beforeAll(() => {
    renderedComponent = renderWithProviders(
      <Route path="/">
        <AppLayout/>
      </Route>,
      {
        route: "/"
      })
  })

  it("should render correctly", () => {
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  })
})
