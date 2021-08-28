import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
  state = {
    name: '',
  };

handleSubmit = e => {
    e.preventDefault ();

    const user = {
        name: this.state.name
    }

    axios.post(`https://jsonplaceholder.typicode.com/users`, {user})
}

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}> {person.name})</li>
        ))}
      </ul>
    );
  }
}
