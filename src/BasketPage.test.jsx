import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BasketPage from "./BasketPage";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

describe("BasketPage", () => {
  it("displays 'Basket is empty.' when the basket is empty", () => {
    render(
      <BrowserRouter>
        <BasketPage basket={[]} setBasket={() => {}} />
      </BrowserRouter>
    );

    expect(screen.getByText("Basket is empty.")).toBeInTheDocument();
  });
});
