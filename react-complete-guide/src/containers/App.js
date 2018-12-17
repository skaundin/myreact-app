import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import '../components/Persons/Person/Person.css';
import cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  state = {
    persons: [
    { id:'asdd' , name: 'Max', age:28},
    {id: 'bnkk' , name: 'Manu', age:29},
    {id: 'jhgr' , name: 'Stephanie', age:26}
    ],

    showPerson: false
  }

  togglePersonHandler = () => {
    const doNotShow = this.state.showPerson;
    this.setState({showPerson: !doNotShow})
  }

  nameChangeHandler = (event, id ) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }

  deletePersonHandler =(personIndex) => { 
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }
  
  render() {
    const style = {
      backgroundColor:'green',
      color:"white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
        <Persons 
          persons = { this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangeHandler} />
      </div>
      );
      style.backgroundColor = "red";
      style['.hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    return (
      <StyleRoot>
        <div className={classes.App}>
        <cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} />
        {persons}
        </div>
      </StyleRoot>
    );
    //return React.createElement('div', {className:'App'}, 'h1', React.createElement('div',null,'Does this work now'))
  }
}

export default Radium(App);
