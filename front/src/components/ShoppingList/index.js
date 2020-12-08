import React from 'react';
import { Link } from 'react-router-dom';
import { Checkbox } from 'semantic-ui-react'
import './shoppingList.scss';

const ShoppingList = () => {
  console.log('ShoppingList');
  return (
    <>
      <div className="home">
        <h2 className="home__title">Liste de courses</h2>
      </div>
      <div className="home__miniature">
        <div className="ui card">
          <div className="liste_recettes">
            <p className="recette">Recette 1
              <button type="button" className="icon__addshopping">
                <i className="trash alternate icon" />
              </button>
              <div className="content">
                <Checkbox label="Article 1" />
                <Checkbox label="Article 2" />
                <Checkbox label="Article 3" />
              </div>
            </p>
            <p className="recette">Recette 2
              <button type="button" className="icon__addshopping">
                <i className="trash alternate icon" />
              </button>
              <div className="content">
                <Checkbox label="Article 1" />
                <Checkbox label="Article 2" />
                <Checkbox label="Article 3" />
              </div>
            </p>
            <p className="recette">Recette 3
              <button type="button" className="icon__addshopping">
                <i className="trash alternate icon" />
              </button>
              <div className="content">
                <Checkbox label="Article 1" />
                <Checkbox label="Article 2" />
                <Checkbox label="Article 3" />
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default ShoppingList;
