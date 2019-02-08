import React, { Component } from 'react';

class Card extends Component {
    render() {
        let {character} = this.props
        let imageURL = `${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`
        console.log(character)
      return (
        <div>
            {character.name}<br />
            <img src={imageURL} alt="Abomination"/>
        </div>
      );
    }
  }

export default Card;