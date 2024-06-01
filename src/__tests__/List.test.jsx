import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import List from "../pages/List";
import "@testing-library/jest-dom/extend-expect";

describe("List Component", () => {
  it("should render the correct heading and list of items", () => {
    const list = [
      { item_id: 1, item_name: "Apple", price: 0.5 },
      { item_id: 2, item_name: "Banana", price: 0.3 },
      { item_id: 3, item_name: "Milk", price: 1.5 },
    ];

    const { getByText, getAllByRole } = render(<List list={list} />);

    const headingElement = getByText("Shopping List");
    const itemElements = getAllByRole("item-list");

    expect(headingElement).toBeInTheDocument();
    expect(itemElements.length).toBe(list.length);

    list.forEach((item, index) => {
      const itemNameElement = getByText(`${item.item_name}`);
      const itemPriceElement = getByText(`Price: £${item.price}`);

      expect(itemNameElement).toBeInTheDocument();
      expect(itemPriceElement).toBeInTheDocument();

      const itemElement = itemElements[index];
      expect(itemElement).toHaveTextContent(`${item.item_name}`);
      expect(itemElement).toHaveTextContent(`Price: £${item.price}`);
    });
  });
});
