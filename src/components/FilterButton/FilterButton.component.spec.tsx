import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { FilterButton } from "./FilterButton.component";

describe("FilterButton Component", () => {
  const mockSetIsFiltered = jest.fn();
  const mockSetFormFilters = jest.fn();

  it("renders the FilterButton component correctly", () => {
    const { getByText } = render(
      <FilterButton
        isMobile={false}
        isFiltered={false}
        setIsFiltered={mockSetIsFiltered}
        setFormFilters={mockSetFormFilters}
      />
    );

    const filterButton = getByText(/filter/i);
    expect(filterButton).toBeInTheDocument();
  });

  it("renders the Clear Filters button when isFiltered is true", () => {
    const { getByText } = render(
      <FilterButton
        isMobile={false}
        isFiltered={true}
        setIsFiltered={mockSetIsFiltered}
        setFormFilters={mockSetFormFilters}
      />
    );

    const clearFiltersButton = getByText(/clear filters/i);
    expect(clearFiltersButton).toBeInTheDocument();
  });

  it("calls the clearFilters function when the Clear Filters button is clicked", () => {
    const { getByText } = render(
      <FilterButton
        isMobile={false}
        isFiltered={true}
        setIsFiltered={mockSetIsFiltered}
        setFormFilters={mockSetFormFilters}
      />
    );

    const clearFiltersButton = getByText(/clear filters/i);
    fireEvent.click(clearFiltersButton);

    expect(mockSetIsFiltered).toHaveBeenCalledWith(false);
    expect(mockSetFormFilters).toHaveBeenCalled();
  });
});
