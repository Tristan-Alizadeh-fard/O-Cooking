import React from 'react';
import { Button, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ListAsRecipe = ({
  name,
  id,
  recipeIngredients,
  removeShoppingRecipe,
  removeFromList,
  listCheck,
}) => {
  console.log('ListAsRecipe');
  return (
    <div className="recette"><h3>{name}</h3>
      <button
        type="button"
        className="icon__addshopping"
        onClick={() => removeShoppingRecipe(id)}
      >
        <i className="trash alternate icon shoplist" />
      </button>
      <div className="content">
        {recipeIngredients.map((ingredient) => {
          if (listCheck !== undefined) {
            if (listCheck.find((ig) => ig === ingredient.id)) {
              return (
                // eslint-disable-next-line react/button-has-type
                <Checkbox
                  label={ingredient.quantity}
                  onClick={() => removeFromList(ingredient.id)}
                  key={ingredient.id}
                  defaultChecked
                />
              );
            }
            if (!listCheck.find((ig) => ig === ingredient.id)) {
              return (
                // eslint-disable-next-line react/button-has-type
                <Checkbox
                  label={ingredient.quantity}
                  onClick={() => removeFromList(ingredient.id)}
                  key={ingredient.id}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};

ListAsRecipe.propTypes = {
  listCheck: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  recipeIngredients: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
};

export default ListAsRecipe;
