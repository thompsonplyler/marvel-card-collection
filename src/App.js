import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import AddToCollection from './Container/AddToCollection';
import Login from './components/Login';
import './CSS/App.css';
import './CSS/SlideOut.css';
import Test from './components/Test';



class App extends Component {
  //SETS INITIAL STATE: CHARACTER= EMPTY ARRAY, I = INCREMENT FOR CARD CSS//
  state={
    character: [],
  }

submitButtonClicked= (event) => {
  console.log(event)
}

valueEntered = () => {
  console.log("Poop")
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
    render(){
    return <Test />
    // (<div>
    //   {//DEFINE LOGIN ROUTE
    //   }
      
    //   <Route 
    //   path="/login" 
    //   render={()=>(
    //           <Login clickHandler={this.submitButtonClicked} />
    //   )}
    //   />;
      
    //   {// DEFINE COLLECTION PATH/ MAIN SCREEN
    //   }
      
    //   <Route 
    //   path="/collection" 
    //   render={()=>(
    //           <AddToCollection characters={this.state.character} />
    //   )}
    //   />;

    //   </div>
    // )
  }


}

export default App;


