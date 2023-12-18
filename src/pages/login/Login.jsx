/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Login({ setUser, setUsers, users }) {


  const [ism, setIsm] = useState("")
  const [email, setEmail] = useState("")
  const [parol, setParol] = useState("")
  const navigate = useNavigate()
  const handleLogin = event => {
    event.preventDefault();
    const newUser = {
      ism,
      email,
      parol,
      id: users.length + 1
    }
    setUser(newUser);
    setUsers([...users, newUser])
    navigate("/")

  }
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input onChange={e => setIsm(e.target.value)} required type="text" placeholder="ism kiriting" />
        <input onChange={e => setEmail(e.target.value)} required type="email" placeholder="email kiriting" />
        <input autoComplete="off" onChange={e => setParol(e.target.value)} required type="password" placeholder="parol kiriting" />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
