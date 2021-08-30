import React from 'react';
import './CheckBox.css'

function Checkbox() { 
    return (
        <div className="CheckBox"> 
        <p> I will dedicated the time to study </p> 
        <form>
        <input type="checkbox" /> 
        <label> Studying React </label> 
        <br/>
        <input type="checkbox" /> 
        <label> remember the syntax  </label> 
        </form> 
        </div> 
    )
}

export default Checkbox;