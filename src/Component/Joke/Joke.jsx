import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <>
    <hr/>
      <h5 style={{ display: props.question? "block" : "none" }}>

        Question: {props.question}
      </h5>
      <p> Answer: {props.punchLine} </p>
      <hr/> 
    </>
  );
}

export default Joke;
