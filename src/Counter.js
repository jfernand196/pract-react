import react, {useState} from "react";
import "./App.css"



const Counter = () => {
    const [sum, setSum] = useState(0);

    return(
        <div className="incrementa">
        <div>{sum}</div>
        <button className="boton" onClick={() => setSum(sum + 1)}> incrementa </button>
        </div>
    )

}

export default Counter