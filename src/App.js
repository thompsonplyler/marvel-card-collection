import React, { Component } from 'react';
import Login from './components/Login';
import Popup from './components/Popup'
import AddToCollection from './Container/AddToCollection'
import './CSS/App.css';
import './CSS/SlideOut.css';



class App extends Component {
  //SETS INITIAL STATE: CHARACTER= EMPTY ARRAY, I = INCREMENT FOR CARD CSS//
  state={
    character: [],
    showPopup: false,
    selectedChar: [],
    comic: []
  }

  togglePopup = () => {
    // debugger
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  getCharacterForPopup = (char) => {
this.setState({
    selectedChar: char
  })
}




//FETCH FOR CHARACTERS
  componentDidMount(){
    fetch("https://gateway.marvel.com:443/v1/public/characters?events=238&orderBy=-modified&limit=12&apikey=70c5f7383da76e0b2daaa2d2a67f7532")
    .then(res=>res.json())
    .then(character => this.setState({
      character: character.data.results
            })
          )


    }


  render() {
// debugger
// let url= this.selectedChar.comics.items[1].resourceURI + "?apikey=70c5f7383da76e0b2daaa2d2a67f7532"
// debugger
    return (
      <div>
      <AddToCollection characters={this.state.character} popUpHandler={this.togglePopup} charHandler={this.getCharacterForPopup}/>
      {this.state.showPopup ?
          <Popup char = {this.state.selectedChar}
            text='Close Me'
            closePopup={this.togglePopup}
          />
          : null
        }

      </div>
          )
    }
}

export default App;

// <Login />
