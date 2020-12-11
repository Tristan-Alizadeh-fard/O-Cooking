import React from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ListAsRecipe = ({
  name,
  index,
  recipeIngredients,
  removeShoppingRecipe,
  removeFromList,
}) => {
  console.log('ListAsRecipe');
  return (
    <div className="recette"><h3>{name}</h3>
      <Button
        type="button"
        className="icon__addshopping"
        onClick={() => removeShoppingRecipe(index)}
      >
        <i className="trash alternate icon" />
      </Button>
      <div className="content">
        {recipeIngredients.map((ingredient, idx) => (
          <Checkbox
            label={ingredient.quantity}
            onClick={() => removeFromList(idx)}
            key={ingredient.quantity}
          />
        ))}
      </div>
    </div>
  );
};

ListAsRecipe.propTypes = {
  name: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
};

export default ListAsRecipe;
