import React from 'react';
import PropTypes from 'prop-types';
import ListAsRecipe from './ListAsRecipe';
import './shoppingList.scss';

const ShoppingList = ({ shoppingList, removeFromList, removeShoppingRecipe, shoppingListCheck, sendShoppingList, listCheck }) => {
  console.log('ShoppingList');

  return (
    <>
      <div className="home__miniature">
        <h1 className="home__title">Aide de courses</h1>
        {shoppingList !== undefined && <div className="liste_recettes">
          {shoppingList.map((recipe) => (
            // eslint-disable-next-line max-len
            <ListAsRecipe {...recipe} key={recipe.name} removeShoppingRecipe={removeShoppingRecipe} removeFromList={removeFromList} listCheck={listCheck} />
          ))}
        </div>}
        {shoppingList.length === 0 && <p>Votre aide de course est vide.</p>}
        {shoppingList.length > 0 && <button type="button" className="btn_send" onClick={() => sendShoppingList()}>Envoyer la liste sur ma boite mail</button>}
      </div>
    </>
  );
};

ShoppingList.propTypes = {
  sendShoppingList: PropTypes.func.isRequired,
  shoppingList: PropTypes.array.isRequired,
  listCheck: PropTypes.array.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  removeFromList: PropTypes.func.isRequired,
  getShopListAction: PropTypes.func.isRequired,
};

export default ShoppingList;
