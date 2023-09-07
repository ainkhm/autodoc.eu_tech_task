import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { CustomButton } from './CustomButton.component'

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}))

const mockResetFilters = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
  ;(React.useContext as jest.Mock).mockReturnValue({
    resetFilters: mockResetFilters,
  })
})

test('renders filter button when isFiltered is false', () => {
  const { getByTestId } = render(<CustomButton isFiltered={false} />)

  const filterButton = getByTestId('filter-button')

  expect(filterButton).toBeInTheDocument()
})

test('renders clear button when isFiltered is true', () => {
  const { getByTestId } = render(<CustomButton isFiltered={true} />)

  const clearButton = getByTestId('clear-button')

  expect(clearButton).toBeInTheDocument()
})

test('calls setModalIsOpen when filter button is clicked', () => {
  const setModalIsOpen = jest.fn()
  const { getByTestId } = render(
    <CustomButton isFiltered={false} setModalIsOpen={setModalIsOpen} />,
  )

  const filterButton = getByTestId('filter-button')
  fireEvent.click(filterButton)

  expect(setModalIsOpen).toHaveBeenCalled()
})

test('calls clearFilters and sets isFiltered and formFilters when clear button is clicked', () => {
  const setIsFiltered = jest.fn()
  const setFormFilters = jest.fn()
  const { getByTestId } = render(
    <CustomButton
      isFiltered={true}
      setIsFiltered={setIsFiltered}
      setFormFilters={setFormFilters}
    />,
  )

  const clearButton = getByTestId('clear-button')
  fireEvent.click(clearButton)

  expect(mockResetFilters).toHaveBeenCalled()
  expect(setIsFiltered).toHaveBeenCalledWith(false)
  expect(setFormFilters).toHaveBeenCalledWith({})
})
