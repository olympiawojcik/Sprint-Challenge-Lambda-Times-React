import React, { Component } from "react";
import Card from "./Card";

import PropTypes from "prop-types";

{
  /* <Cards
cards={
  this.state.filteredCards.length > 0
    ? this.state.filteredCards
    : this.state.cards
}
/> */
}

const Cards = props => {
  console.log(props);
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => (
        <Card card={card} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    })
  )
};
