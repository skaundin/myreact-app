import React from 'react';
import persons from '../Persons/Persons';

let classes = [];
if(this.state.persons.length <= 2) {
    classes.push('red');
}
if(this.state.persons.length <= 1) {
    classes.push('bold');
}

const cockpit = () => {
    return(
    <div className="App">
        <h1>Hi ! I am a React App !! </h1>
        <p> className={classes.join(' ')} This is really working </p>
        <button 
        onClick={this.togglePersonHandler}>Toggle Persons </button>
        {persons}
    </div>
    );
 };



export default cockpit;