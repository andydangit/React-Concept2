import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
  state = {
    id: 0,
  };

  handleChange = e => {
      this.setState ({ id: e.target.value })
  }

handleSubmit = e => {
    e.preventDefault ();



    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`) 
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
}

  render() {
    return (
<form onSubmit ={this.handleSubmit}>
    <label>
        Person ID: 
        <input type="number" name="id" onChange={this.handleChange} />
    </label>
    <button type='submit'>Delete</button>
</form>
    );
  }
}
