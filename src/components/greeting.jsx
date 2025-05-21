import { Fragment } from "react";

function Greeting(props) {
  return (
    <div style={{backgroundColor : "red", color : "black" }}>
      <h1 >
        Hello, {props.name} {props.surname}!
      </h1>
      <h2>This text was not there </h2>
    </div>
  );
}

export default Greeting;
