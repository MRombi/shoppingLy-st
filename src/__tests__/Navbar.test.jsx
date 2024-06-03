import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import { Context } from "../App";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom/extend-expect";

const MockContextProvider = ({ children, contextValue }) => (
  <Context.Provider value={contextValue}>{children}</Context.Provider>
);

describe("Navbar component", () => {
  let contextValue;

  beforeEach(() => {
    contextValue = [10, () => {}];
  });

  it("renders the navbar", () => {
    render(
      <BrowserRouter>
        <MockContextProvider contextValue={contextValue}>
          <Navbar />
        </MockContextProvider>
      </BrowserRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the Supermarket link", () => {
    render(
      <BrowserRouter>
        <MockContextProvider contextValue={contextValue}>
          <Navbar />
        </MockContextProvider>
      </BrowserRouter>
    );
    const link = screen.getByText("Supermarket");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/");
  });

  it("renders the Shopping List link", () => {
    render(
      <BrowserRouter>
        <MockContextProvider contextValue={contextValue}>
          <Navbar />
        </MockContextProvider>
      </BrowserRouter>
    );
    const link = screen.getByText("Shopping List");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/shopping-list");
  });

  it("renders the Budget component", () => {
    render(
      <BrowserRouter>
        <MockContextProvider contextValue={contextValue}>
          <Navbar />
        </MockContextProvider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Total Price:/)).toBeInTheDocument();
  });

  it("displays the budget input initially", () => {
    render(
      <BrowserRouter>
        <MockContextProvider contextValue={contextValue}>
          <Navbar />
        </MockContextProvider>
      </BrowserRouter>
    );
    const budgetInput = screen.getByPlaceholderText("Set Budget");
    expect(budgetInput).toBeInTheDocument();
  });

  it("updates the budget on form submit", () => {
    render(
      <BrowserRouter>
        <MockContextProvider contextValue={contextValue}>
          <Navbar />
        </MockContextProvider>
      </BrowserRouter>
    );
    const budgetInput = screen.getByPlaceholderText("Set Budget");
    fireEvent.change(budgetInput, { target: { value: "20" } });
    fireEvent.submit(budgetInput);
    expect(screen.getByText("Budget: £20")).toBeInTheDocument();
  });
});
