import React, { Component } from "react";
import "./App.css";
import Welcome from "./Welcome";

//-----------------------------------------------
// ----Component funtional inside than App.js----
//-----------------------------------------------
// const Welcome = (props) => <h1>Welcome {props.name}</h1>;
//----------------------------------------------------------

//--------------------------------------------
// ----Component Class inside than App.js ----
//--------------------------------------------
// class Welcome extends Component {
// constructor(props){
//   super(props);
// }
// render(){
//   return <h1>Welcome {this.props.name}</h1>
// }
// }
//------------------------------------------------------------

// ----------------------------
// ----With main Clases--------
// ----------------------------
class App extends Component {
  render() {
    const names = ["Juan", "Pedro", "Carlos"];
    return (
      <div>
        {names.map((name) => (<Welcome name={name} />))}
      </div>
    );
  }
}
// ----------------------------

// ----------------------------
// -----With main Funcional----
// ----------------------------
// function App() {
//   return (
//     <Welcome name="Juan"/>
//   );
// }
// ----------------------------
export default App;
