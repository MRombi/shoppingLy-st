import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom/extend-expect";

describe("Navbar Component", () => {
  it("should render navigation links", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const supermarketLink = getByText("Supermarket");
    const shoppingListLink = getByText("Shopping List");

    expect(supermarketLink).toBeInTheDocument();
    expect(shoppingListLink).toBeInTheDocument();
  });

  it("should navigate to the correct path when supermarket link is clicked", () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const supermarketLink = getByText("Supermarket");
    supermarketLink.click();

    expect(window.location.pathname).toBe("/");
  });

  it("should navigate to the correct path when shopping list link is clicked", () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const shoppingListLink = getByText("Shopping List");
    shoppingListLink.click();

    expect(window.location.pathname).toBe("/shopping-list");
  });

  it("should have the correct class names", () => {
    const { getByRole } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const navElement = getByRole("navigation");
    const ulElement = getByRole("list");

    expect(navElement).toHaveClass("navigation");
    expect(ulElement).toHaveClass("navigation-links");
  });
});
