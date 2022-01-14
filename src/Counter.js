import react, {useState} from "react";
import "./App.css"



function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

// const Counter = () => {
//     const [sum, setSum] = useState(0);

//     return(
//         <div className="incrementa">
//         <div>{sum}</div>
//         <button className="boton" onClick={() => setSum(sum + 1)}> incrementa </button>
//         </div>
//     )

// }

export default Counter