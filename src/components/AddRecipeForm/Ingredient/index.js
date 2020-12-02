import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ ingredient }) => (
  <div>
    <p>{ingredient}</p>
  </div>
);

Ingredient.propTypes = {
  ingredient: PropTypes.string.isRequired,
};

export default Ingredient;
