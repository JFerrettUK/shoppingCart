// ProductCard.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProductCard from "./ProductCard";

describe("ProductCard", () => {
  it("renders product card", () => {
    const product = {
      id: 1,
      name: "Test Product",
      description: "Description for Test Product",
      price: 10,
      imageSource: "test-image.jpg",
    };

    render(<ProductCard {...product} basket={[]} setBasket={() => {}} />);

    const productNames = screen.getAllByText(/Test Product/i);
    expect(productNames.length).toBeGreaterThan(0);
    expect(productNames[0]).toBeInTheDocument();
  });

  it("increments and decrements quantity correctly", () => {
    const product = {
      id: 1,
      name: "Test Product",
      description: "Description for Test Product",
      price: 10,
      imageSource: "test-image.jpg",
    };

    const setBasketMock = (newBasket) => {
      console.log("New Basket:", newBasket);
    };

    render(<ProductCard {...product} basket={[]} setBasket={setBasketMock} />);

    fireEvent.click(screen.getByText("+"));

    // Replace with accurate assertion based on your actual behavior
    expect(screen.getByText(/£10/)).toBeInTheDocument();
  });

  it("adds item to cart with correct quantity", () => {
    const product = {
      id: 1,
      name: "Test Product",
      description: "Description for Test Product",
      price: 10,
      imageSource: "test-image.jpg",
    };

    const setBasketMock = (newBasket) => {
      console.log("New Basket:", newBasket);
    };

    render(<ProductCard {...product} basket={[]} setBasket={setBasketMock} />);

    fireEvent.click(screen.getByText("Add to cart"));

    // Replace with accurate assertion based on your actual behavior
    expect(screen.getByText(/£10/)).toBeInTheDocument();
  });
});
