import React from "react";
import {
  Landing,
  Error,
  SkillList,
  Register1,
  ProtectedRoute,
  Login1,
} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Stats,
  AddJob,
  SharedLayout,
  AllJobs,
  Dashboard,
  EmploeeList,
} from "./pages/dashboard";
import ProfilePage from "./pages/profilePage/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<AllJobs />} />
          {/* <Route path='employee-list' element={<EmploeeList />} /> */}
        </Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-projects" element={<AddJob />} />
          <Route path="add-skill" element={<AllJobs />} />
          <Route path="view-skill" element={<SkillList />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="landing" element={<Landing />}></Route>
        <Route path="login" element={<Login1 />}></Route>
        <Route path="register" element={<Register1 />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
};

export default App;
