import React from "react";
import { createMemoryHistory } from "history";
import { Router, Route } from "react-router-dom";
import renderer from "react-test-renderer"

export function renderWithProviders(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {},
  apolloMocks
) {
  console.log("I am route inside renderWithProviders Wrapper:", route);
  return {
    ...renderer.create(
      <Router history={history}>
        <Route path={route}>{ui}</Route>
      </Router>
    ),
    history
  };
}
