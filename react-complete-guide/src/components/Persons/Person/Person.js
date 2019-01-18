import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {
	constructor(props){
		super(props);
		console.log('Person.js - Inside constructor')
	}
		componentWillMount(){
		  console.log('Person.js: Inside Component will mount')
	}
	
	  componentDidMount(){
		console.log("Person.js: Inside Component did mount")
	}
	

	componentDidUpdate(){
		console.log("Person js: Inside component did update  ")
	}
	render(){
		console.log("Person.js: Inside render method")
		return (
			<div className= {classes.Person} >
				<p onClick={this.props.click}> I am {this.props.name}  and I am {this.props.age} years old!</p>
				<p> {this.props.children}</p>
				<input type = "text" onChange={this.props.changed} value={this.props.name}/>
			</div>
			)

	}
	
};

export default Person;