import axios from 'axios';
import React from 'react'

export default class PersonList extends React.Component{
    state = {
        persons:[],
    };


    componentDidMount() { 
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            this.setState({person: res.data});
        })
    }

render() { 
    return (
        
    )
}


}