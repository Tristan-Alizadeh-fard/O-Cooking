import React from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ListAsRecipe = ({
  name,
  id,
  recipeIngredients,
  removeShoppingRecipe,
  removeFromList,
  shoppingListCheck,
}) => {
  console.log('ListAsRecipe');
  return (
    <div className="recette"><h3>{name}</h3>
      <Button
        type="button"
        className="icon__addshopping"
        onClick={() => removeShoppingRecipe(id)}
      >
        <i className="trash alternate icon" />
      </Button>
      <div className="content">
        {recipeIngredients.map((ingredient) => {
          if (shoppingListCheck.find((ig) => ig === ingredient.id)) {
            return (
              <Checkbox
                label={ingredient.quantity}
                onClick={() => removeFromList(ingredient.id)}
                key={ingredient.id}
                defaultChecked
              />
            );
          }
          if (!shoppingListCheck.find((ig) => ig === ingredient.id)) {
            return (
              <Checkbox
                label={ingredient.quantity}
                onClick={() => removeFromList(ingredient.id)}
                key={ingredient.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

ListAsRecipe.propTypes = {
  shoppingListCheck: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
};

export default ListAsRecipe;
