import React from "react";

function Joke(props) {
  console.log(props);
  return (
    <>
    <hr/>
      <h5 style={{ display: props.jokes.question ? "block" : "none" }}>

        Question: {props.jokes.question}
      </h5>
      <p> Answer: {props.jokes.punchline} </p>
      <hr/> 
    </>
  );
}

export default Joke;
