import React, { Component } from 'react';
import strength from '../images/strength.png'
import speed from '../images/speed.png'
import agility from '../images/agility.png'
import stamina from '../images/stamina.png'
import durability from '../images/durability.png'
import intelligence from '../images/intelligence.png'
import '../CSS/App.css';
import '../CSS/Attribute.css';
import '../CSS/ComicBoxSmall.css';
import '../CSS/SmallCard.css'



import jQuery from 'jquery'






class SmallCard extends Component {
  state = {
    clicked: false,
    showPopup: false

  }


  componentDidMount(){
  //   jQuery(document).ready(function($){
  //     $('div.front ').on('click', function(){
  //       console.log(this);
  //       $(this).toggleClass('front transition');
  //       // debugger
  //     });
  // })
}
//FUNCTIONS FOR DRAG AND DROP//
 // allowDrop = (ev) => {
 //   debugger
 //    ev.preventDefault();
 //  }

   drag = (ev) => {
     // debugger
    ev.dataTransfer.setData("text", ev.target.id);
  }

 // drop = (ev) => {
 //   debugger
 //    ev.preventDefault();
 //    var data = ev.dataTransfer.getData("text");
 //    ev.target.appendChild(document.getElementById(data));
 //  }
  //END DRAG AND DROP//
clickHandler = () => {
  // debugger
  this.setState ({
    clicked: !this.state.clicked
  })
}
    render() {
      // console.log(this.props);
        let {character} = this.props
        let imageURL = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`
      return (
        <div >

          <li id={`char-${character.id}`} className={`card2 card-${this.props.increment}`} id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}}>
            <div className={this.state.clicked? "flip-container flip" : "flip-container"} ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div>
                  <div className="front2">
                  <h1>{character.name}</h1>
                    <img id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="charImage2" src={imageURL} onClick={this.props.clickHandler}/>
                  </div>



                  </div>
                </div>
                <button className= {this.props.stacked && this.state.clicked? "buttonthing2": "buttonthing-hidden" } onClick={(e)=> {
                  this.clickHandler()
                  this.props.charHandler(character)

                }}> Flip Card</button>
              </div>
            </li>

        </div>

      );
    }
  }

export default SmallCard;
