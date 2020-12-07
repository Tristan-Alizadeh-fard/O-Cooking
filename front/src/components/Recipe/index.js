import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import yoda from '../../../bbyoda.jpeg';
import './recipe.scss';

const Recipe = ({ recipe }) => {
  console.log('Recipe component');
  return (
    <div className="recette">
      <div className="recette__image">
        <img src={yoda}/>
      </div>
      <button type="button" className="icon__addshopping">Ajouter à l'aide course
        <i className="shopping cart icon" />
      </button>
      <button type="button" className="icon__addshopping">Share
        <i className="paper plane icon" />
      </button>
      <button type="button" className="icon__addshopping">PDF
        <i className="file pdf icon" />
      </button>
      <button type="button" className="icon__addshopping">Ajouter aux favoris
        <i className="heart outline icon" />
      </button>
      <button type="button" className="icon__addshopping">Modifier la recette
        <i className="edit icon" />
      </button>
      <button type="button" className="icon__addshopping">Supprimer la recette
        <i className="trash alternate icon" />
      </button>
      <div className="recette__title">
        <h2>coucou</h2>
        <p className="author">By "User"</p>
        <h3>Plat - Temps de préparation: 2h30 - Temps de cuisson: 1h00</h3>
      </div>
      <div className="recette__ingredients">
        <h3 className="recette__ingredient">Liste des ingrédients</h3>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div className="recette__etapes">
        <h3 className="recette__etape">Liste des étapes</h3>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
    </div>
  );
};

Recipe.prototype = {
  recipe: PropTypes.array.isRequired,
};

export default Recipe;
