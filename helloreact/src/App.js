import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

//step 3 define reducers
const reducer = function(state = 0, action){
  switch(action.type){
    case "INCREMENT":
    {
    return state+ action.payload
    break
    }
    default :{
      break
    }
  }
  return state
}

// Step 1 create the store
const store = createStore(reducer)
store.subscribe(function(){
    console.log('current state is: ' , store.getState())
})

// step 2 create and dispatch action
store.dispatch({
   type: "INCREMENT",
   payload : 1
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
