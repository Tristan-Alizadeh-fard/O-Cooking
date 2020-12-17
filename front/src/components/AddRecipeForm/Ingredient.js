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
  <div className="ingredient">
    <p>{quantity} {measure} de {name}</p>
    <div className="ingredient__icons">
      <Button
        className="edit_ingredient_button"
        type="button"
        onClick={() => console.log('Modification à venir')}
      >
        <Icon name="pencil" color="blue" />
      </Button>
      <Button
        className="edit_ingredient_button"
        type="button"
        onClick={() => removeFromRecipe('ingredients', index)}
      >
        <Icon name="delete" color="red" />
      </Button>
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
