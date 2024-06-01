import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Item from "../components/Item";
import "@testing-library/jest-dom/extend-expect";

describe("Item Component", () => {
  it("should render the item name and price", () => {
    const item = { item_name: "Apple", price: 0.5 };

    render(<Item item={item} />);

    const itemNameElement = screen.getByText(/Apple/i);
    const itemPriceElement = screen.getByText(/Price: £0.5/i);

    expect(itemNameElement).toBeInTheDocument();
    expect(itemPriceElement).toBeInTheDocument();
  });

  it("should render with the correct class name", () => {
    const item = { item_name: "Milk", price: 1.5 };

    render(<Item item={item} />);

    const itemElement = screen.getByRole("listitem");

    expect(itemElement).toHaveClass("item-container");
  });

  it("should handle missing quantity gracefully", () => {
    const item = { item_name: "Banana", price: 0.3 };

    render(<Item item={item} />);

    const itemQuantityElement = screen.queryByText("Quantity:");

    expect(itemQuantityElement).toBeNull();
  });
});
