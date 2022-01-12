import react from "react";

// Component funtional
const Welcome = (props) => <div><h1> Welcome {props.nombre}</h1><p>Welcome 2 {props.nombre}</p></div>

// Component Class
// class Welcome extends react.Component {
//     constructor(props){
//       super(props);
//     }
//     render(){
//       return <h1>Welcome {this.props.nombre}</h1>
//     }
//     }

export default Welcome