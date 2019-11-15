import React, {Component} from 'react';

import { CardList} from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    //this.handleChange = this.handleChange.bind(this);
    /* alternatively we can also add the .bind(this)
     * when we are passing a method to the child components;
     * in our case: handleChange = { this.handleChange.bind(this) }
     * 
     * Also, we can use the Fat-Arrow or arrow functions.
     * Example: handleChange function below
     */
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({ monsters: users}));
  }

  handleChange = e  => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={ this.handleChange }
        />
        <CardList monsters = { filteredMonsters }/> 
        
      </div>
    );
  }
}

export default App;
