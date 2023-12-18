import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

test('clicking on the "Visit the product page" button navigates to the /store page', async () => {
  render(
    <Router>
      <Home />
    </Router>
  );

  // Click on the "Visit the product page" button
  const visitButton = screen.getByText(/Click here to visit the product page/i);
  userEvent.click(visitButton);

  // Wait for the navigation to complete
  await waitFor(() => {
    expect(window.location.pathname).toBe("/store");
  });
});
