
import { useEffect } from "react"
import "./Home.css"
import { useState } from "react"
// useEffect hook



function Home() {
  const [son, setSon] = useState(localStorage.getItem("raqam") || 1)//
  const [money, setMoney] = useState(100)
  const [users,setUsers]=useState(JSON.parse(localStorage.getItem("users")) || [])


  // // componentDidUpdate;
  useEffect(() => {
  
    localStorage.setItem("users",JSON.stringify(users))
  
  }, [users])

  // console.log('hello-1')
  // componentUnMounted;
  // useEffect(() => {
  //   return () => {
  //     console.log('home sahifadanxonadan chiqib ketdim')
  //   }
  // }, [])

  // localStorage

  return (
    <div className="home">
      <h1>home sahifa</h1>
      <h2>{son}</h2>
      <button onClick={() => setSon(+son + 1)}>son qoshis</button>

      <h2>{money}</h2>
      <button onClick={() => setMoney(money + 5)}>pul qoshish</button>

    </div>
  )
}

export default Home
