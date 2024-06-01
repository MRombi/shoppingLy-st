import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import RemoveItem from "../components/RemoveItem";
import "@testing-library/jest-dom/extend-expect";

describe("RemoveItem Component", () => {
  it("should call setList with the item removed from the list when clicked", () => {
    const mockItem = { id: 1, name: "Apple", price: 0.5 };
    const setListMock = vi.fn();

    const { getByText } = render(
      <RemoveItem setList={setListMock} item={mockItem} />
    );

    const removeButton = getByText("Remove");
    fireEvent.click(removeButton);
    expect(removeButton).toBeInTheDocument();
    expect(setListMock).toHaveBeenCalledWith(
      expect.not.arrayContaining([mockItem])
    );
  });
});
