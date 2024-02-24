import React from 'react'
import { Landing, Error, Dashboard, SkillList, Register, ProtectedRoute} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stats,AddJob, SharedLayout, AllJobs} from './pages/dashboard';

// const router = createBrowserRouter([
//   {
//     path: "/skill",
//     element:<SkillList/>
//   }
// ])

const App = () => {
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
        </Route>
      <Route path="landing" element={<Landing/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
      <Route path="skilllist" element={<SkillList/>}></Route>
      <Route path="*" element={<Error/>}></Route>
     </Routes>
     <ToastContainer position='top-center'/>
   </BrowserRouter>
  )
}

export default App