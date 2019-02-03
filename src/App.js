import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.scss';

class App extends Component {
  handleInput(event){
    console.log('event:', event);
    window.scrollTo(100,100);
    console.log('sub-event:', event.view.scrollTo(100, 100));
  }
  render() {
    return (
      <div className="center-align">
        <p className="red-text text-accent-1" id="test" onClick={this.handleInput}>Hello Ke cha?</p>
      </div>
    );
  }
}

export default App;