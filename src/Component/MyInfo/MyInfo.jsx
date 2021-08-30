import React from "react";
import '../MyInfo/MyInfo.css'
import Skill from "../Skill/Skill";

function MyInfo() {

    const date = new Date()
    const hours = date.getHours()

    let timeOfDay
  
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }

  return (
    <div>
      <h1> Andy Dang </h1>
      <p>
        I'm going to be a <strong>S</strong>oftware <strong>D</strong>eveloper
      </p>
      <p> it is about {date.getHours() % 12} o'clock and it is <strong style={{color: "#ff8c00"}}> {timeOfDay} </strong> time; get to practice coding</p>
      
      <Skill /> 
    </div>
  );
}

export default MyInfo;
