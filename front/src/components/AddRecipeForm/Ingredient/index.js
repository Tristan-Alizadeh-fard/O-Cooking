import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import './ingredient.scss';

const Ingredient = ({ ingredient, index, updateIngredients }) => (
  <div className="ingredient">
    <p>{ingredient.quantity} {ingredient.measure} de {ingredient.name}</p>
    <div className="ingredient__icons">
      <Button
        onClick={() => updateIngredients(index)}
      >
        <Icon name="pencil" color="blue" />
      </Button>
      <Button
        onClick={() => updateIngredients(index)}
      >
        <Icon name="delete" color="red" />
      </Button>
    </div>
  </div>
);

Ingredient.propTypes = {
  ingredient: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateIngredients: PropTypes.func.isRequired,
};

export default Ingredient;
