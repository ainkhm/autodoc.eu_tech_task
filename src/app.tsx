import React from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { FilterArgsContextProvider } from './context/FilterArgsContext'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails.page'
import CharactersList from './pages/CharactersList/CharactersList.page'

const App = () => {
  return (
    <div>
      <FilterArgsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Navigate to='/characters' />} />
            <Route path='/' element={<Navigate to='/characters' />} />
            <Route path='/characters' element={<CharactersList />} />
            <Route path='/characters/:characterId' element={<CharacterDetails />} />
          </Routes>
        </BrowserRouter>
      </FilterArgsContextProvider>
    </div>
  )
}

export default App
