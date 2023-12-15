import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProdItemQuery, useUpdateProdMutation } from '../../servises/prodApi'

function Edit() {
    const { id } = useParams()
    const { data, isLoading, isSuccess } = useGetProdItemQuery(id)
    const [editProd] = useUpdateProdMutation()
    const edit = e => {
        e.preventDefault()
        const forma = new FormData(e.target)
    }
    return (
        <>
            <form onSubmit={edit}>
                <input type="text" name="title" id="" />
                <input type="text" name="img" id="" />
                <input type="number" name="price" id="" />
                <button>Edit</button>
            </form>
        </>
    )
}

export default Edit

