import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './recipe.scss';
import { setAllLoaders } from '../../actions/user';

const Recipe = ({ recipe, isLoadingOneRecipe, setLoaders }) => {
  console.log('Recipe component', recipe);
  return (
    <>
      {isLoadingOneRecipe && <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        </div>}
      {!isLoadingOneRecipe && <div className="recette">
        <div className="image__container">
          <i className="image icon" />
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
        {/* <button type="button" className="icon__addshopping">Modifier la recette
          <i className="edit icon" />
        </button> */}
        <button type="button" className="icon__addshopping">Signaler la recette
          <i className="flag icon" />
        </button>
        <Link className="link__back" to="/allrecipes" onClick={() => setLoaders()}>Retour</Link>
        <div className="recette__title">
          <h2>{recipe.name}</h2>
          {recipe.tags.map((tag) => (
                    <div key={tag.name} className="tags__container">
                      <span className="tag">{tag.name}</span>
                    </div>
                  ))}
          {recipe.signaled && <h3 className="signaled">Cette recette est potentiellement douteuse pour la communauté !</h3>}
          <p className="author">{`By ${recipe.author.pseudo}`}</p>
          <h3>{`- ${recipe.category.name} -`}</h3>
          <h3>{`- Temps de préparation = ${recipe.preparationTime}`}</h3>
          <h3>{`- Temps de cuisson = ${recipe.cookingTime}`}</h3>
        </div>
        <div className="recette__ingredients">
          <h3 className="recette__ingredient">Liste des ingrédients</h3>
          {recipe.recipeIngredients.map((ingredient) => (
            <p key={ingredient.quantity}>{ingredient.quantity}</p>
          ))}
        </div>
        <div className="recette__etapes">
          <h3 className="recette__etape">Liste des étapes</h3>
          {recipe.steps.map((step) => (
            <p key={step.description}>{step.description}</p>
          ))}
        </div>
        <Link className="link__back" to="/allrecipes" onClick={() => setLoaders()}>Retour</Link>
      </div>}
    </>
  );
};

Recipe.prototype = {
  setLoaders: PropTypes.func.isRequired,
  recipe: PropTypes.array.isRequired,
};

export default Recipe;
