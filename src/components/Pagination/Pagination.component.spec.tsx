import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { Pagination } from './Pagination.component'

import { FilterArgsContext } from '../../context/FilterArgsContext'

const mockContextValue = {
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
  resetFilters: jest.fn(),
}

test('Pagination component renders correctly', () => {
  const { getByText, getByTestId } = render(
    <FilterArgsContext.Provider value={mockContextValue}>
      <Pagination />
    </FilterArgsContext.Provider>,
  )

  const pagesInfo = getByText('3 of 5')
  expect(pagesInfo).toBeInTheDocument()

  const totalCharacters = getByText('Total characters: 50')
  expect(totalCharacters).toBeInTheDocument()

  const backButton = getByTestId('prev-button')
  const nextButton = getByTestId('next-button')
  expect(backButton).toBeEnabled()
  expect(nextButton).toBeEnabled()
})

test('Clicking on previous and next buttons triggers the correct function', () => {
  const { getByTestId } = render(
    <FilterArgsContext.Provider value={mockContextValue}>
      <Pagination />
    </FilterArgsContext.Provider>,
  )

  const backButton = getByTestId('prev-button')
  const nextButton = getByTestId('next-button')

  fireEvent.click(backButton)
  fireEvent.click(nextButton)

  expect(mockContextValue.updatePage).toHaveBeenCalledWith(2)
  expect(mockContextValue.updatePage).toHaveBeenCalledWith(4)
})
