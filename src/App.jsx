

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
// home,about
function App() {

  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])
  console.log(tasks)

  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home setUsers={setUsers} users={users} />} />
        <Route path="about" element={<About />} />
        <Route path="tasks" element={<Tasks setTasks={setTasks} tasks={tasks} />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="login" element={<Login
          setUsers={setUsers}
          users={users}
          setUser={setUser} />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </>
  );
}
export default App;


