import { render, fireEvent, screen } from '@testing-library/react'
import React from 'react'

import { NavBar, formInitialState } from './NavBar.component'

import { FilterArgsContext } from '../../context/FilterArgsContext'

const mockContextValue = {
  resetFilters: jest.fn(),
  page: 1,
  paginationInfo: {
    count: null,
    next: null,
    prev: null,
    pages: null,
  },
  filters: {
    name: '',
    status: '',
    gender: '',
  },
  filter: () => {},
  updatePage: () => {},
  updatePaginationInfo: () => {},
}

describe('NavBar Component', () => {
  beforeEach(() => {
    render(
      <FilterArgsContext.Provider value={mockContextValue}>
        <NavBar />
      </FilterArgsContext.Provider>,
    )
  })

  it('renders the logo', () => {
    const logo = screen.getByAltText('Logo')
    expect(logo).toBeInTheDocument()
  })

  it('clicking the logo calls resetFilters and resets formFilters and isFiltered', () => {
    const logo = screen.getByAltText('Logo')
    fireEvent.click(logo)

    expect(mockContextValue.resetFilters).toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Select...' })).toBeInTheDocument()
    expect(screen.getByText('Select...')).toBeInTheDocument()
    expect(screen.queryByText('CustomButton Content')).toBeNull()
  })

  it('opens the modal when the filter button is clicked', () => {
    const filterButton = screen.getByText('Filter')
    fireEvent.click(filterButton)

    const modal = screen.getByText('FilterModal Content')
    expect(modal).toBeInTheDocument()
  })
})
