import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
  state = {
    name: '',
  };

  handleChange = e => {
      this.setState ({ name: e.target.value })
  }

handleSubmit = e => {
    e.preventDefault ();

    const user = {
        name: this.state.name
    }

    axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
    TouchEvent(res => {
        console.log(res);
        console.log(res.data);
    })
}

  render() {
    return (
<formo onSubmit ={this.handleSubmit}>
    <label>
        Person Name: 
        <input type="text" name="name" onChange={this.handleChange} />
    </label>
</form>
    );
  }
}
