import React, {PureComponent } from 'react';
import Person from '../Persons/Person/Person';

class Persons extends  PureComponent {
    constructor(props){
		super(props);
		console.log('Persons.js - Inside constructor')
	}
	componentWillMount(){
		console.log('Persons.js: Inside Component will mount')
	}
	
	componentDidMount(){
		console.log("Persons.js: Inside Component did mount")
	}
    
    componentWillReceiveProps(nextProps){
        console.log("Persons js: Inside receive props ",nextProps)
    }

componentWillUpdate(nextProps, nextState){
    console.log("Persons js: Inside component will update  ",nextProps, nextState)
}
    render(){
        console.log("Persons.js: Inside render method")
        return this.props.persons.map((person,index) => {
    
        return <Person 
            click={() => this.props.clicked(index)}
            name={person.name}
            age = {person.age}
            key = {person.id}
            changed = {(event) => this.props.changed(event, person.id)}/>
        });
    }
}


export default Persons;