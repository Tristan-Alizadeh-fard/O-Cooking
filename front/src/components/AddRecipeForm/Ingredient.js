import React, { useState, useEffect } from 'react';
import {
  Button,
  Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './addRecipeForm.scss';

const Ingredient = ({
  updateRecipe,
  removeFromRecipe,
  index,
  quantity,
  measure,
  name,
}) => (
  <div className="ingredient" key={`${quantity} ${measure}`}>
    <p>{quantity} {measure} de {name}</p>
    <div className="ingredient__icons">
      <button
        type="button"
        onClick={() => console.log('ingredients', index)}
      >
        <Icon name="pencil" color="blue" />
      </button>
      <button
        type="button"
        onClick={() => removeFromRecipe('ingredients', index)}
      >
        <Icon name="delete" color="red" />
      </button>
      <button
        type="button"
        onClick={() => console.log('sais pas')}
      >
        <Icon name="delete" color="red" />
      </button>
    </div>
  </div>
);

Ingredient.propTypes = {
  updateRecipe: PropTypes.func.isRequired,
  removeFromRecipe: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  measure: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default Ingredient;
