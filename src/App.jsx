

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Detail from "./pages/detail/Detail";
import { useState } from "react";
import NotFound from "./pages/404Page/NotFound";
import Tasks from "./pages/tasks/Tasks";
import Edit from "./pages/Edit/Edit";
import Register from "./pages/register/Register";
// home,about
function App() {




  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        

      </Routes>


    </>
  );
}
export default App;


