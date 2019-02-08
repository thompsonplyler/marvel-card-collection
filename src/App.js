import React, { Component } from 'react';
import Card from './components/Card';
import './App.css';

class App extends Component {
  state={
    character: {}
  }
  
  componentDidMount(){
    fetch("http://gateway.marvel.com/v1/public/characters/1009146?apikey=58bea1e75f211476a952296b9b6a544c&hash=95fa758cd8e4e9c661be8f2d7e7fa521&ts=2")
    .then(res=>res.json())
    .then(character => this.setState({
      character: [character.data.results[0]]
    })
    )

  }

  render() {
    return (
      <div>
        {(this.state.character.length) ? <Card character={this.state.character[0]}/> : "Blerp"} 
       
      </div>
    );
  }
}

export default App;
