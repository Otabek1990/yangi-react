/* eslint-disable react/prop-types */

import { Navigate, useNavigate } from "react-router-dom"
import { useDeleteProdMutation } from "../../servises/prodApi"

// eslint-disable-next-line react/prop-types
function Card({ item }) {
    const navigate = useNavigate()
    const detail = e => {
        navigate(`/detail/${item.id}`)
    }
    const [deleteProd] = useDeleteProdMutation()
    const del = () => {
        deleteProd(item.id)
    }
    const edit = () => {
        navigate(`/edit/${item.id}`)
    }
    return (
        <div className="card">
            <img onClick={detail} src={item.img} alt="" />
            <h1>nomi: {item.title}</h1>
            <button onClick={del}>Delete</button>
            <button onClick={edit}>Edit</button>
        </div>
    )
}

export default Card
