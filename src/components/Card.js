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





class Card2 extends Component {
//FUNCTIONS FOR DRAG AND DROP//
 allowDrop = (ev) => {
    ev.preventDefault();
  }

   drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

 drop = (ev) => {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  //END DRAG AND DROP//

    render() {
        let {character} = this.props
        let imageURL = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`
      return (
        <div >
          <li id={`char-${character.id}`} className={`card card-${this.props.increment}`}>
            <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
              <div className="flipper">
                <div>
                  <div className="front">
                  <h1>{character.name}</h1>
                    <img id={`char-${character.id}`} className="charImage" src={imageURL}/>
                    <img className="marvelLogo" src="https://i.pinimg.com/originals/b6/38/10/b63810667a19130d9fae50bddb1c1fbe.jpg" />
                  </div>
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
                    </div>
                    </span>
                  </div>
                </div>
              </div>
            </li>
        </div>

      );
    }
  }

export default Card2;


// <h1>{character.name}</h1>
// <div className="content">
// <p>{character.description}</p>
// </div>






// <div className="stats">
// <img className="stat-pic" src={strength} />
// <p className="stat-name"> Strength: </p>
// <img className="stat-pic2" src={speed} />
// <p className="stat-name2"> Speed: </p>
// <img className="stat-pic3" src={agility} />
// <p className="stat-name3"> Agility: </p>
// <img className="stat-pic4" src={stamina} />
// <p className="stat-name4"> Stamina: </p>
// <img className="stat-pic5" src={durability} />
// <p className="stat-name5"> Durability: </p>
// <img className="stat-pic6" src={intelligence} />
// <p className="stat-name6"> Intelligence: </p>
// </div>
