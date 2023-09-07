import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Filter } from "./Filter.component";

jest.mock("../../context/FilterArgsContext", () => ({
  FilterArgsContext: {
    Consumer: ({ children }: any) => children({ filter: jest.fn() }),
  },
}));

test("renders Filter component", () => {
  const { getByText, getByPlaceholderText } = render(
    <Filter isMobile={false} />
  );

  expect(getByText("Name")).toBeInTheDocument();
  expect(getByText("Status")).toBeInTheDocument();
  expect(getByText("Gender")).toBeInTheDocument();
  expect(getByPlaceholderText("Search by name...")).toBeInTheDocument();
});

test("calls handleSubmit when form is submitted", () => {
  const handleSubmit = jest.fn();
  const { getByTestId } = render(<Filter isMobile={false} />);
  fireEvent.submit(getByTestId("filter-form"));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
