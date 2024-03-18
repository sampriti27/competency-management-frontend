// import React from 'react'
// <<<<<<< HEAD
// // eslint-disable-next-line
// import { Route, Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import SkillList from './pages/skill/skillList'
// import ProjectList from './pages/project/projectList'

// const router = createBrowserRouter([
//   {
//     path: "/skill",
//     element:<SkillList/>
//   },
//   {
//     path: "/project",
//     element:<ProjectList/>
//   }
// ])

import { Landing, Error, SkillList, Register1, ProtectedRoute, Login1} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stats,AddJob, SharedLayout, AllJobs, Dashboard, EmploeeList} from './pages/dashboard';
import ProjectList from './pages/project/projectList';
import PersonalDetails from '.pages/Employee-Details/PersonalDetails';

function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='add-job' element={<AddJob />} />
          <Route path='all-jobs' element={<AllJobs />} />
          {/* <Route path='employee-list' element={<EmploeeList />} /> */}
        </Route>
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='all-projects' element={<ProjectList />} />
          {/* <Route path='add-skill' element={<AllJobs />} /> */}
          <Route path='view-skill' element={<SkillList />} />
        </Route>
      <Route path="landing" element={<Landing/>}></Route>
      <Route path="login" element={<Login1/>}></Route>
      <Route path="register" element={<Register1/>}></Route>
      <Route path="employee-details" element={<PersonalDetails/>}></Route>
      <Route path="*" element={<Error/>}></Route>
     </Routes>
     <ToastContainer position='top-center'/>
   </BrowserRouter>
  )
}

export default App;
