import { useProdQuery } from "../../servises/prodApi";
import Card from "../home/Card";
import "./About.css";
function About() {
    const { data, isLoading, isSuccess } = useProdQuery()
    return (
        <div className="about">
            <h1>
                Lorem ipsum dolor sit.
            </h1>
            {isLoading && <h1>Loading...</h1>}
            {isSuccess && data.map(item => <Card item={item} key={item.id} />)}
            
        </div>
    )
}

export default About
