import { render, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import { describe, it, vi, expect } from "vitest";
import AddItem from "../components/AddItem";
import "@testing-library/jest-dom/extend-expect";

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useContext: vi.fn(),
  };
});

describe("AddItem component", () => {
  it("renders the Add button", () => {
    useContext.mockReturnValue([null, vi.fn()]);
    render(
      <AddItem setList={vi.fn()} item={{ item_name: "Apple", price: 1 }} />
    );
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("calls setList and setTotal when button is clicked", () => {
    const setListMock = vi.fn();
    const setTotalMock = vi.fn();
    useContext.mockReturnValue([null, setTotalMock]);

    render(
      <AddItem
        setList={setListMock}
        item={{ item_id: 1, item_name: "Apple", price: 1 }}
      />
    );

    fireEvent.click(screen.getByText("Add"));

    expect(setListMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setTotalMock).toHaveBeenCalledWith(expect.any(Function));

    const currentItems = [];
    const item = {
      item_id: 1,
      item_name: "Apple",
      price: 1,
      quantity: 1,
    };
    const addItemCallback = setListMock.mock.calls[0][0];
    const newItems = addItemCallback(currentItems);
    expect(newItems).toEqual([item]);

    const currentTotal = 0;
    const addTotalCallback = setTotalMock.mock.calls[0][0];
    const newTotal = addTotalCallback(currentTotal);
    expect(newTotal).toBe(1);
  });
});
