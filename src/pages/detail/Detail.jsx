import "./Detail.css"
import { products } from "../../datas/products"
import { useParams } from "react-router-dom"
import { useGetProdItemQuery } from "../../servises/prodApi"
function Detail() {
  const { id } = useParams()
  const { data, isLoading, isSuccess } = useGetProdItemQuery(id)
  console.log(data)
  return (
    <div>
      <h1>DETAIL PAGE{id}</h1>
      {isLoading && <h1>loading...</h1>}
      {isSuccess && (
        <div className="detail-page">
          <img src={data?.img} alt="" />
          <h1>Ismi: {data?.title}</h1>
          <h1>Narhi: {data?.price}</h1>
         
        </div>
      )}
    </div>
  )
}

export default Detail
