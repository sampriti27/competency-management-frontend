import React from 'react'
// eslint-disable-next-line
import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import SkillList from './pages/skill/skillList'
import ProjectList from './pages/project/projectList'

const router = createBrowserRouter([
  {
    path: "/skill",
    element:<SkillList/>
  },
  {
    path: "/project",
    element:<ProjectList/>
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