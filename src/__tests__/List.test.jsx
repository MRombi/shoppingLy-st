import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import List from "../pages/List";
import "@testing-library/jest-dom/extend-expect";

vi.mock("../components/Item", () => ({
  default: ({ item }) => <div>{item.item_name}</div>,
}));
vi.mock("../components/RemoveItem", () => ({
  default: ({ item, setList }) => (
    <button
      onClick={() =>
        setList((prev) => prev.filter((i) => i.item_id !== item.item_id))
      }
    >
      Remove {item.item_name}
    </button>
  ),
}));

describe("List component", () => {
  const initialList = [
    { item_id: 1, item_name: "Item 1", price: 10 },
    { item_id: 2, item_name: "Item 2", price: 20 },
  ];

  it("renders the heading", () => {
    render(<List list={initialList} setList={vi.fn()} />);
    expect(screen.getByText("Shopping List")).toBeInTheDocument();
  });

  it("renders the list items", () => {
    render(<List list={initialList} setList={vi.fn()} />);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("renders the RemoveItem buttons", () => {
    render(<List list={initialList} setList={vi.fn()} />);
    expect(screen.getByText("Remove Item 1")).toBeInTheDocument();
    expect(screen.getByText("Remove Item 2")).toBeInTheDocument();
  });

  it("renders the correct number of list items", () => {
    render(<List list={initialList} setList={vi.fn()} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2);
  });
});
