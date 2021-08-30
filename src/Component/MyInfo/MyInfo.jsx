import React from "react";
import '../MyInfo/MyInfo.css'
import Skill from "../Skill/Skill";

function MyInfo() {

    const date = new Date()

  return (
    <div>
      <h1> Andy Dang </h1>
      <p>
        I'm going to be a <strong>S</strong>oftware <strong>D</strong>eveloper
      </p>
      <p> it is about {date.getHours() % 12} o'clock; get to practice coding</p>
      
      <Skill /> 
    </div>
  );
}

export default MyInfo;
