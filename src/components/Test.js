import React, { Component } from 'react';
import '../CSS/Card.css';
import '../CSS/Attribute.css';
import '../CSS/ComicBox.css'

class Test extends Component {

    state = {
        characters : [],
        random_number_array: [],
        localCharList: []
    }
    
    componentDidMount(){
        let randomNumberList = []
        for (let i=0;i<6;i++){
            let randomChar = (Math.floor(Math.random()*154))+1
            randomNumberList.push(randomChar)
        }
        //uses random numbers to make call on Rails db below.

        randomNumberList.forEach(char => {
            fetch(`http://localhost:3000/api/v1/characters/${char}`).then(r=>r.json()).then(character=> {
                    this.setState({
                    
                    localCharList: [...this.state.localCharList,character]
                    // pulled from local (Rails) database, includes power levels and names. Names are used below
                        })
                fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character.character.name}&apikey=70c5f7383da76e0b2daaa2d2a67f7532`)
                    .then(r=>r.json())
                    .then(marvelCharacter=>
                        this.setState({
                            characters: [...this.state.characters,marvelCharacter]}
                            ))
                            //this is the fetch from the Marvel API. state.characters == array of characters from Marvel
        })})

    }





    render(){
        console.log("Marvel Array", this.state.characters.map(character=> character.data.results[0]))//this.state.characters.map(character=> character.results[0].name):null)
        return this.state.character > 0 ? <div><ul>{this.state.characters.map(character=> <li><img src={`${character.data.results[0].thumbnail}`.jpg} alt=""/></li>)}</ul></div>
        : <div>Nothing</div>
    
    }
}
export default Test 