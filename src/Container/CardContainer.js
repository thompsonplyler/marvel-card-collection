import React from 'react'
import Card from '../components/Card';
import '../CSS/App2.css';

import jQuery from 'jquery'

class CardContainer extends React.Component {
  //SETS INITIAL STATE: I = INCREMENT NUMBER FOR CARD CSS//
  state = {
    i: 1
  }
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
   // debugger
   dropevent.target.appendChild(document.getElementById(data));
 }
//END DRAG AND DROP//

  componentDidMount(){
    //JQUERY TO MAKE CARDS EXPAND OUT //
    jQuery(document).ready(function($){
      $('ul.cards').on('click', function(){
        $(this).toggleClass('transition');
      });
      $('ul.card-stacks').on('click', function(){
        $(this).toggleClass('transition');
      });

      $('ul.cards-split').on('click', function(){
        $(this).toggleClass('transition');
      });

      $('ul.cards-split-delay').on('click', function(){
        $(this).toggleClass('transition');
      });
    });

  }

render(){
  let incrementNum = [this.state.i]
  //ARRAY WITH ADDED CHARACTER INCREMENT//
  let charIncArray = this.props.characters.map(character => [character, character.inc = incrementNum++])
//CRREATE INDIVIDUAL CARDS WITH CARD OBJECT AND INCREMENT//
  let charArray = charIncArray.map(character=> <Card character={character[0]} increment={character[1]} />)
  return (
    <div className="bigDiv">
      <div id="div2" onDrop={(event) => {this.drop(event)}} onDragOver={(event) => {this.allowDrop(event)}}>
        {charArray}
      </div>
    </div>
  )
}
}

export default CardContainer
