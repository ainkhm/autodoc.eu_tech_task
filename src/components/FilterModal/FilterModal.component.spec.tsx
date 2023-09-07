import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { FilterModal } from './FilterModal.component'

describe('FilterModal', () => {
  it('renders without errors', () => {
    const { container } = render(
      <FilterModal
        setModalIsOpen={() => {}}
        setFormFilters={() => {}}
        formFilters={{}}
        isFiltered={false}
        setIsFiltered={() => {}}
      />,
    )
    expect(container).toBeInTheDocument()
  })

  it('calls setModalIsOpen when the close button is clicked', () => {
    const setModalIsOpenMock = jest.fn()
    const { getByText } = render(
      <FilterModal
        setModalIsOpen={setModalIsOpenMock}
        setFormFilters={() => {}}
        formFilters={{}}
        isFiltered={false}
        setIsFiltered={() => {}}
      />,
    )

    const closeButton = getByText('X')
    fireEvent.click(closeButton)

    expect(setModalIsOpenMock).toHaveBeenCalled()
  })
})
