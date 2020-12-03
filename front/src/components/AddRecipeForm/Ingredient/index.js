import React from 'react';
import PropTypes from 'prop-types';
import { Icon, Button } from 'semantic-ui-react';
import './ingredient.scss';

const getNewList = (arr, index) => {
  arr.splice(index, 1);
  console.log('getNewList', arr);
  return arr;
};

const Ingredient = ({
  list,
  ingredients,
  ingredient,
  index,
  updateRecipeIngredients,
  deleteRecipeIngredients,
}) => (
  <div className="ingredient">
    <p>{ingredient.quantity} {ingredient.measure} de {ingredient.name}</p>
    <div className="ingredient__icons">
      <Button
        type="button"
        onClick={() => updateRecipeIngredients(index)}
      >
        <Icon name="pencil" color="blue" />
      </Button>
      <Button
        type="button"
        onClick={() => deleteRecipeIngredients(getNewList(ingredients, index))}
      >
        <Icon name="delete" color="red" />
      </Button>
      <Button
        type="button"
        onClick={() => console.log(list)}
      >
        Log list
      </Button>
    </div>
  </div>
);

Ingredient.propTypes = {
  list: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
  ingredient: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateRecipeIngredients: PropTypes.func.isRequired,
  deleteRecipeIngredients: PropTypes.func.isRequired,
};

export default Ingredient;
