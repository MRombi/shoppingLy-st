import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import AddItem from "../components/AddItem";
import "@testing-library/jest-dom/extend-expect";

describe("AddItem Component", () => {
  it('should render a button with "Add" text', () => {
    const setListMock = vi.fn();
    const item = { item_name: "Apple", price: 0.5 };
    const { getByText } = render(<AddItem setList={setListMock} item={item} />);
    const addButton = getByText("Add");
    expect(addButton).toBeInTheDocument();
  });

  it("should call setList with the correct item when button is clicked multiple times", () => {
    const setListMock = vi.fn();
    const item = { item_name: "Apple", price: 0.5 };
    const { getByText } = render(<AddItem setList={setListMock} item={item} />);
    const addButton = getByText("Add");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(setListMock).toHaveBeenCalledTimes(3);
  });
});
