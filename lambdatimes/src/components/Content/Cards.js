import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

const Cards = props => {
  return (
    <div className="cards-container">
          {props.cards.map((object)=>(<Card key={object.author}card={object}/>))}
    </div>
  );
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes ={
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      author:PropTypes.string,
      headline:PropTypes.string,
      img:PropTypes.string,
      tab:PropTypes.string,
    })
  )
}

export default Cards;
