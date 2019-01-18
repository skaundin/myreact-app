import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('App.js - Inside constructor')
    this.state = {
      persons: [
      { id:'asdd' , name: 'Max', age:28},
      {id: 'bnkk' , name: 'Manu', age:29},
      {id: 'jhgr' , name: 'Stephanie', age:26}
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }
    componentWillMount(){
      console.log('App.js: Inside Component will mount')
  }

  componentDidMount(){
    console.log("App.js: Inside Component did mount")
  }


	componentWillUpdate(nextProps, nextState){
		console.log("Appjs: Inside component will update  ",nextProps, nextState)
	}


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
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
    console.log("In render method")
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons
      
        persons = { this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangeHandler} />;
  }
      
    return (
        <div className={classes.App}>
        <button onClick={() => {this.setState({showPersons : true})}}>Show Persons</button>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked = {this.togglePersonsHandler}/>
        {persons}
        </div>
    );
    //return React.createElement('div', {className:'App'}, 'h1', React.createElement('div',null,'Does this work now'))
  }
}

export default App;
