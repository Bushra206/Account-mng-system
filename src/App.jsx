import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Admin from './components/Admin'
import AllCompaniesDetailProvider from './components/context/AllCompaniesDetailProvider'
import CompaniesPage from './components/Companies-page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleCompany from './components/SingleCompany'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>


      <Routes>
      <Route
          path="/"
          element={
            <Admin/>
          }
        />
        <Route
          path="/Company-page"
          element={
            <CompaniesPage/>
          }
        />
        <Route path="singlecompany/:id" element={<SingleCompany />} />
      </Routes>

  </BrowserRouter>
  )
}

export default App
