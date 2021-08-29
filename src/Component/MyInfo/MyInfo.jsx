import React from "react";
import '../MyInfo/MyInfo.css'
import Skill from "../Skill/Skill";

function MyInfo() {
  return (
    <div>
      <h1> Andy Dang </h1>
      <p>
        I'm going to be a <strong>S</strong>oftware <strong>D</strong>eveloper
      </p>
      
      <Skill /> 
    </div>
  );
}

export default MyInfo;
