import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { DcPage, MarvelPage } from '../heroes'
import { NavBar } from '../ui/components/NavBar'

export const AppRouter = () => {
  return (
    <>
      <NavBar/>
        <Routes>
            <Route path='/marvel' element={<MarvelPage/>}/>
            <Route path='dc' element={<DcPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='/' element={<Navigate to="/marvel"/>}/>

        </Routes>
    </>
  )
}
