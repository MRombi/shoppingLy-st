import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useContext } from "react";
import RemoveItem from "../components/RemoveItem";
import "@testing-library/jest-dom/extend-expect";

vi.mock("react", async () => {
  const actual = await vi.importActual("react");
  return {
    ...actual,
    useContext: vi.fn(),
  };
});

describe("RemoveItem component", () => {
  const setListMock = vi.fn();
  const setTotalMock = vi.fn();
  const item = { item_id: 1, item_name: "Item 1", price: 10, quantity: 2 };
  const contextValue = [null, setTotalMock];

  beforeEach(() => {
    useContext.mockReturnValue(contextValue);
  });

  it("renders the Remove button", () => {
    render(<RemoveItem setList={setListMock} item={item} />);
    expect(screen.getByText("Remove")).toBeInTheDocument();
  });

  it("calls setList and setTotal correctly when removing an item", () => {
    render(<RemoveItem setList={setListMock} item={item} />);
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);

    expect(setListMock).toHaveBeenCalledWith(expect.any(Function));
    expect(setTotalMock).toHaveBeenCalledWith(expect.any(Function));
  });

  it("decreases quantity if item quantity is more than 1", () => {
    const initialList = [
      { item_id: 1, item_name: "Item 1", price: 10, quantity: 2 },
    ];

    setListMock.mockImplementation((updateFn) => {
      const newList = updateFn(initialList);
      expect(newList[0].quantity).toBe(1);
    });

    render(<RemoveItem setList={setListMock} item={item} />);
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);
  });

  it("removes item from list if quantity is 1", () => {
    const initialList = [
      { item_id: 1, item_name: "Item 1", price: 10, quantity: 1 },
    ];

    setListMock.mockImplementation((updateFn) => {
      const newList = updateFn(initialList);
      expect(newList).toHaveLength(0);
    });

    render(
      <RemoveItem setList={setListMock} item={{ ...item, quantity: 1 }} />
    );
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);
  });

  it("updates total correctly when removing an item", () => {
    setTotalMock.mockImplementation((updateFn) => {
      const newTotal = updateFn(20);
      expect(newTotal).toBe(10);
    });

    render(<RemoveItem setList={setListMock} item={item} />);
    const removeButton = screen.getByText("Remove");
    fireEvent.click(removeButton);
  });
});
