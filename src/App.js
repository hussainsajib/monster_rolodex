import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      string: null,
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ this.state.string }</p>
          <button onClick={()=> this.setState({ string: 'Hello from SetState' })}>SetState</button><br></br>
          <button onClick={()=> this.setState({ string: 'Hello from Class' })}>Class</button><br></br>
          <button onClick={()=> this.setState({ string: null})}>Clear all</button>
        </header>
      </div>
    );
  }
}

export default App;
