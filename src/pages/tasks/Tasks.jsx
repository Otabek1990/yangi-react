/* eslint-disable react/prop-types */
import { useAddProdMutation, useProdQuery } from "../../servises/prodApi";
import "./Tasks.css";

function Tasks() {
    const [addProd] = useAddProdMutation()
    const addTaskHandler = e => {
        e.preventDefault();
        const forma = new FormData(e.target)
        const { title, img, price } = Object.fromEntries(forma.entries())
        const newProd = {
            title,
            img,
            price,
        }
        addProd(newProd)
    }
    return (
        <div className="login-container">
            <h1>Tasks sahifa</h1>
            <form onSubmit={addTaskHandler} className="login-form">
                <input type="text" name="title" id="" placeholder="modelni kiriting" />
                <input type="text" placeholder="resmini kiriting" name="img" id="" />
                <input type="number" placeholder="narhini kiriting" name="price" id="" />
                <button>Kiriting</button>
            </form>

        </div>
    )
}

export default Tasks
