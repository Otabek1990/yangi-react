
import { useEffect } from "react"
import "./Home.css"
import { useState } from "react"
import Banner from "../../components/Banner/Banner"
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
  // local branch===>global branch
  // global branch;
// master 
  // banner create task==>

  return (
    <div className="home">
      <Banner/>
   

    </div>
  )
}

export default Home
