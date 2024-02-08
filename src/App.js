import React from 'react'
import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import SkillList from './pages/skill/skillList'

const router = createBrowserRouter([
  {
    path: "/skill",
    element:<SkillList/>
  }
])

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App