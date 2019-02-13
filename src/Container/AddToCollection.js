import React, { Component } from 'react';
import '../CSS/Card.css';
import '../CSS/Attribute.css';
import '../CSS/Header.css';
import '../CSS/SlideOut.css';
import pow from '../images/pow.png'
import Slideout from 'slideout'
import CardContainer from "../Container/CardContainer"
import SmallContainer from "../Container/SmallContainer"



class AddToCollection extends Component {
//FUNCTIONS FOR DRAG AND DROP//
state = {
  clicked: false,
  view: false
}
  allowDrop= (allowdropevent)=> {
    // debugger
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

clickHandler = () => {
  this.setState ({
    clicked: !this.state.clicked
  })
}

changeView = () => {
  this.setState ({
    view: !this.state.view
  })
}

  render(){
    
    console.log(this.state.view);
    return(
      <div>
       <div id="divFirst" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
      <input type="checkbox" id="slide" name="" value="" />
      	<div class="container2">
        	<label for="slide" class="toggle" onClick={() => {this.changeView()}}>☰</label>
      		<nav class="sidebar">

      		</nav>
      	 </div>
        </div>
            <main id="panel">
              <header>
                <header className="hero">
                <img className="pow" src={pow} />
                  <h1 className="title-Marvel">MARVEL</h1> <h2>Brawl</h2>
                </header>
                  {this.state.view?
                    <ul className={this.state.clicked ? "cards2 transition" : "cards2" }>

                    <SmallContainer characters={this.props.characters} clickHandler={this.clickHandler} popUpHandler={this.props.popUpHandler} stacked={this.state.clicked} charHandler={this.props.charHandler}/>
                    </ul>:
                    <ul className={this.state.clicked ? "cards transition" : "cards" }>
            <CardContainer characters={this.props.characters} clickHandler={this.clickHandler} popUpHandler={this.props.popUpHandler} stacked={this.state.clicked} charHandler={this.props.charHandler}/>

            </ul>
          }
              </header>
            </main>

      </div>
    )
  }
}

export default AddToCollection







// <nav id="menu">
// <h2>Add to Collection</h2>
// <div id="divFirst" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
// <img id="plus" src="https://www.pngarts.com/files/3/Plus-Symbol-Download-PNG-Image.png" />
// Drag cards here to add to your collection!
// </div>
// </nav>






// <div id="div2" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}></div>
