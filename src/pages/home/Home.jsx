/* eslint-disable react/prop-types */
import "./Home.css"
import Card from "./Card";




// eslint-disable-next-line react/prop-types
function Home({ users,setUsers }) {

  const deleteUser = (id) => {
    let filtered=users.filter(element=>element.id!==id)
    setUsers(filtered)
  }

  return (
    <div className="home">

    </div>
  )
}

export default Home
