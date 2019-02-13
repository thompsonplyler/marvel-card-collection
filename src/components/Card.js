import React, { Component } from 'react';
import strength from '../images/strength.png'
import speed from '../images/speed.png'
import agility from '../images/agility.png'
import stamina from '../images/stamina.png'
import durability from '../images/durability.png'
import intelligence from '../images/intelligence.png'
import '../CSS/Card.css';
import '../CSS/Attribute.css';
import '../CSS/ComicBox.css'
import jQuery from 'jquery'






class Card extends Component {
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

          <li id={`char-${character.id}`} className={`card card-${this.props.increment}`}>
            <div className={this.state.clicked? "flip-container flip" : "flip-container"} ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div>
                  <div className="front">
                  <h1>{character.name}</h1>
                    <img id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="charImage" src={imageURL} onClick={this.props.clickHandler}/>
                    <img className="marvelLogo" src="https://i.pinimg.com/originals/b6/38/10/b63810667a19130d9fae50bddb1c1fbe.jpg" />
                  </div>
                  <button className= {this.props.stacked? "buttonthing": "buttonthing-hidden" } onClick={(e)=> {
                    this.clickHandler()
                    this.props.popUpHandler()
                    this.props.charHandler(character)
                  }}> Flip Card</button>
                  <span id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="hop">
                     <div className="back">
                     <span id={`char-${character.id}`} draggable="true" onDragStart={(event) => {this.drag(event)}} className="hop"><img id={`char-${character.id}`} className="charImageBack" src={imageURL}/></span>
                     <section className="comic panel grey">
                     <div className="inner single">
                 		<div className="comic-pane">
                       <div onScroll={this.doIt} className="text">
                       <h2 className="yellow">{character.name}</h2>
                         <div className="holder">
                         <p className="desc">{character.description}</p>
                         </div>
                       </div>
                    </div>
                    </div>
                    </section>
                    <div className="stats">
                    <img className="stat-pic" src={strength} />
                    <p className="stat-name"> Strength: </p>
                    <img className="stat-pic2" src={speed} />
                    <p className="stat-name2"> Speed: </p>
                    <img className="stat-pic3" src={agility} />
                    <p className="stat-name3"> Agility: </p>
                    <img className="stat-pic4" src={stamina} />
                    <p className="stat-name4"> Stamina: </p>
                    <img className="stat-pic5" src={durability} />
                    <p className="stat-name5"> Durability: </p>
                    <img className="stat-pic6" src={intelligence} />
                    <p className="stat-name6"> Intelligence: </p>
                    </div>
                    </div>
                    </span>
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

export default Card;


// <h1>{character.name}</h1>
// <button onClick={(e)=> {
  //   this.clickHandler()
  //   this.props.charHandler(character)
  // }}> Flip Card</button>
// <div className="content">
// <p>{character.description}</p>
// </div>
