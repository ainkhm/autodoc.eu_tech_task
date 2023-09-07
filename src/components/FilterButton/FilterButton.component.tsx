import React, { useContext } from 'react'
import { ImFilter, ImCross } from 'react-icons/im'

import { FilterArgsContext } from '../../context/FilterArgsContext'
import { formInitialState } from '../NavBar/NavBar.component'
import './FilterButton.component.css'

interface Props {
  isMobile?: boolean
  isFiltered?: boolean
  setIsFiltered?: any
  setFormFilters?: any
}

export const FilterButton = ({ isMobile, isFiltered, setIsFiltered, setFormFilters }: Props) => {
  const { resetFilters } = useContext(FilterArgsContext)

  const clearFilters = () => {
    resetFilters()
    setIsFiltered(false)
    setFormFilters(formInitialState)
  }

  return (
    <div className={isMobile ? 'button-container-mobile' : 'button-container-desktop'}>
      {!isFiltered && (
        <button className='btn'>
          <ImFilter className='icon' />
        </button>
      )}
      {isFiltered && (
        <button className='btn' onClick={clearFilters}>
          <ImCross className='delete-icon' />
        </button>
      )}
    </div>
  )
}
