import React from 'react'
import { Landing, Error, Register, Dashboard, SkillList } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
      <Route path="/" element={<Landing/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="dashboard" element={<Dashboard/>}></Route>
      <Route path="skilllist" element={<SkillList/>}></Route>
      <Route path="*" element={<Error/>}></Route>
     </Routes>
   </BrowserRouter>
  )
}

export default App