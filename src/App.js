import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import AddToCollection from './Container/AddToCollection';
import './CSS/App.css';
import './CSS/SlideOut.css';



class App extends Component {
  //SETS INITIAL STATE: CHARACTER= EMPTY ARRAY, I = INCREMENT FOR CARD CSS//
  state={
    character: [],
  }

//FETCH FOR CHARACTERS
  componentDidMount(){
    fetch("https://gateway.marvel.com:443/v1/public/characters?limit=12&apikey=70c5f7383da76e0b2daaa2d2a67f7532")
    .then(res=>res.json())
    .then(character => this.setState({
      character: character.data.results
            })
          )
    }


  render() {
    return <Route path="/" component={AddToCollection} />;
      // <div>
      // <AddToCollection characters={this.state.character} />
      // </div>
    }
}

export default App;

// <Login />
