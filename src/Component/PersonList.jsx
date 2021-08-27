import axios from 'axios';
import React from 'react'

export default class PersonList extends React.Component{
    state = {
        persons:[],
    };


    componentDidMount() { 
        axios.get();
    }
}