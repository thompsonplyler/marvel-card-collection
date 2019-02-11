import React, { Component } from 'react';
import '../CSS/Card.css';
import '../CSS/Attribute.css';
import '../CSS/Header.css';
import '../CSS/SlideOut.css';

import Slideout from 'slideout'
import CardContainer from "../Container/CardContainer"


class AddToCollection extends Component {
//FUNCTIONS FOR DRAG AND DROP//
  allowDrop= (allowdropevent)=> {
    allowdropevent.target.style.color = "blue";
    allowdropevent.preventDefault();
  }

drag= (dragevent) => {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = "green";
  }

drop = (dropevent) => {
  dropevent.preventDefault();
  var data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
}
//END DRAG AND DROP//

componentDidMount(){
  //FUNCTION FOR SLIDEOUT DIV//
  let slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
    });

// Toggle button
document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});
}
  render(){
    return(
      <div>
        <nav id="menu">
          <h2>Add to Collection</h2>
            <div id="divFirst" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
              <img id="plus" src="https://www.pngarts.com/files/3/Plus-Symbol-Download-PNG-Image.png" />
                Drag cards here to add to your collection!
            </div>
          </nav>
            <main id="panel">
              <header>
                <button className="toggle-button">☰</button>
                <header className="hero">
                  <h1 className="title-Marvel">MARVEL</h1> <h2>Brawl</h2>
                </header>
                  <ul className="cards">
                    <CardContainer characters={this.props.characters}/>
                  </ul>
              </header>
            </main>

      </div>
    )
  }
}

export default AddToCollection













// <div id="div2" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}></div>
