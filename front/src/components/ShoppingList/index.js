import React from 'react';
import PropTypes from 'prop-types';
import ListAsRecipe from './ListAsRecipe';
import './shoppingList.scss';

const ShoppingList = ({ shoppingList, removeFromList, removeShoppingRecipe }) => {
  console.log('ShoppingList');
  return (
    <>
      <div className="home">
        <h2 className="home__title">Liste de courses</h2>
      </div>
      <div className="home__miniature">
        <div className="ui card">
          {shoppingList !== undefined && <div className="liste_recettes">
            {shoppingList.map((recipe, index) => (
              // eslint-disable-next-line max-len
              <ListAsRecipe {...recipe} index={index} key={recipe.name} removeShoppingRecipe={removeShoppingRecipe} removeFromList={removeFromList} />
            ))}
          </div>}
          {shoppingList === undefined && <p>Votre aide de course est vide.</p>}
        </div>
      </div>
    </>
  );
};

ShoppingList.propTypes = {
  shoppingList: PropTypes.array.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
};

export default ShoppingList;
