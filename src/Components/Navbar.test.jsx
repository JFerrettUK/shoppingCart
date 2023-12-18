import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Add this import statement
import Navbar from "./Navbar";

test("renders Navbar with navigation links", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  // Check if the Home link is rendeWred
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();

  // Check if the Store link is rendered
  const storeLink = screen.getByText(/Store/i);
  expect(storeLink).toBeInTheDocument();

  // Check if the basket link is rendered
  const basketLink = screen.getByAltText(/shopping basket/i);
  expect(basketLink).toBeInTheDocument();
  expect(basketLink.parentElement).toHaveAttribute("href", "/basket");
});
