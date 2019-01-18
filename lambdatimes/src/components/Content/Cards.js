import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map((p, i) => <Card key={i} card={p} />)}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

//MAY NEED TO ADD KEY AND INDEX

Cards.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string,
};

export default Cards;