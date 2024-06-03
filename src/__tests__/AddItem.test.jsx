import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import AddItem from "../components/AddItem";
import "@testing-library/jest-dom/extend-expect";
import { useContext } from "react";

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useContext: vi.fn(),
  };
});

describe("AddItem component", () => {
  const setListMock = vi.fn();
  const setTotalMock = vi.fn();
  const item = { item_id: 1, item_name: "Item 1", price: 10, quantity: 1 };
  const contextValue = [null, setTotalMock];

  beforeEach(() => {
    useContext.mockReturnValue(contextValue);
  });

  it("renders the Add button", () => {
    render(<AddItem setList={setListMock} item={item} />);
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  it("calls setList and setTotal correctly when adding an item", () => {
    render(<AddItem setList={setListMock} item={item} />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    expect(setListMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setTotalMock).toHaveBeenCalledWith(expect.any(Function));
  });

  it("adds item to list when Add button is clicked", () => {
    const initialList = [];

    setListMock.mockImplementation((updateFn) => {
      const newList = updateFn(initialList);
      expect(newList).toEqual([item]);
    });

    render(<AddItem setList={setListMock} item={item} />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
  });

  it("updates total correctly when adding an item", () => {
    setTotalMock.mockImplementation((updateFn) => {
      const newTotal = updateFn(0);
      expect(newTotal).toBe(10);
    });

    render(<AddItem setList={setListMock} item={item} />);
    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
  });
});
