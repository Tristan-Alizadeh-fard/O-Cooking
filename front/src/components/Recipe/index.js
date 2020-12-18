import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './recipe.scss';
import time from 'src/pictures/horloge.png';
import entree from 'src/pictures/entree.png';
import sandwich from 'src/pictures/sandwich.png';
import sauce from 'src/pictures/sauce.png';
import plat from 'src/pictures/plat.png';
import smoothie from 'src/pictures/smoothie.png';
import soupe from 'src/pictures/soupe.png';
import dessert from 'src/pictures/dessert.png';
import cuisson from 'src/pictures/cuisson.png';

const Recipe = ({
  recipe,
  isLoading,
  setSignaled,
  setFavorite,
  unsetFavorite,
  addShopList,
  favorite,
  shoppingList,
  removeShoppingRecipe,
  shareRecipe,
  emailSuccess,
}) => {
  const fix = true;
  return (
    <>
      {isLoading && (
        <div className="ui segment">
          <div className="ui active dimmer">
            <div className="ui text loader">Chargement...</div>
          </div>
        </div>
      )}
      {!isLoading && 
        <div className="container">
          <div className="image__button">
            <div className="image">
              {recipe.picture !== null && <img src={`/api${recipe.picture}`} className="image__recette" />}
              {recipe.picture === null &&  <div className="camera__icon"><i className="camera icon"/></div>}
            </div>
            {!shoppingList && <button type="button" className="icon__addshopping" onClick={() => addShopList(recipe.id)}>Ajouter à l'aide course
                <i className="cart arrow down icon" />
              </button>}
            {!shoppingList.find(shop => shop.id === recipe.id) && <button type="button" className="icon__addshopping" onClick={() => addShopList(recipe.id)}>Ajouter à l'aide course
                <i className="cart arrow down icon" />
              </button>}
            {shoppingList.find(shop => shop.id === recipe.id) && <button type="button" className="icon__addshopping" onClick={() => removeShoppingRecipe(recipe.id)}>Retirer de l'aide course
                <i className="shopping cart icon" />
              </button>}
              {!emailSuccess && <button type="button" className="icon__addshopping" onClick={() => shareRecipe(recipe.id)}>Envoyer par email<i className="paper plane icon" />
              </button>}
              {emailSuccess && <button type="button" className="icon__addshopping">Email envoyé !<i className="thumbs up icon" />
              </button>}
              {!favorite.find(fav => fav.name === recipe.name) && <button type="button" className="icon__addshopping" onClick={() => setFavorite(recipe.id)}>Ajouter aux favoris
                <i className="heart outline icon" />
              </button>}
              {favorite.find(fav => fav.name === recipe.name) && <button type="button" className="icon__addshopping" onClick={() => unsetFavorite(recipe.id)}>Retirer des favoris
                <i className="heart icon" />
              </button>}
              {recipe.signaled === false && <button type="button" className="icon__addshopping" onClick={() => setSignaled(recipe.id)}>Signaler la recette
                <i className="flag icon" />
              </button>}
              <h5 className="author"><i className="user icon" />{recipe.author.pseudo}</h5>
              <span className="date">{`Posté le ${recipe.createdAt}`}</span>
            </div>
        <div className="content recipe">
            <h2 className="title__recipe">{recipe.name}</h2>
          <div className="tags__containerdetail">
          {recipe.tags.map((tag) => (
             <span  key={tag.id} className="tag">{tag.name}</span>
          ))}
          </div>
          {recipe.signaled && <h3 className="signaled">Signalement confirmé - Recette potentielement douteuse ! - En attente de validation par l'admin</h3>}
          {recipe.category.name === 'Entrée' && <h5 className="content__recipe"><img src={entree} />{` ${recipe.category.name}`}</h5>}
          {recipe.category.name === 'Plat' && <h5 className="content__recipe"><img src={plat} />{` ${recipe.category.name}`}</h5>}
          {recipe.category.name === 'Dessert' && <h5 className="content__recipe"><img src={dessert} />{` ${recipe.category.name}`}</h5>}
          {recipe.category.name === 'Sauce' && <h5 className="content__recipe"><img src={sauce} />{` ${recipe.category.name}`}</h5>}
          {recipe.category.name === 'Smoothie' && <h5 className="content__recipe"><img src={smoothie} />{` ${recipe.category.name}`}</h5>}
          {recipe.category.name === 'Soupe' && <h5 className="content__recipe"><img src={soupe} />{` ${recipe.category.name}`}</h5>}
          {recipe.category.name === 'Sandwich' && <h5 className="content__recipe"><img src={sandwich} />{` ${recipe.category.name}`}</h5>}  
          <div className="picto__time">
          <h5 className="content__recipe"><img src={time} />{`  ${recipe.preparationTime}`}</h5>
          <h5 className="content__recipe"><img src={cuisson} />{`  ${recipe.cookingTime}`}</h5>
          </div>
          <div className="recette__ingredients">
          <h3 className="recette__ingredient">Liste des ingrédients</h3>
          {recipe.recipeIngredients.map((ingredient) => (
            <p className="ingredient__recipe" key={ingredient.id}>{ingredient.quantity}</p>
          ))}
        </div>
        <div className="recette__etapes">
          <h3 className="recette__etape">Liste des étapes</h3>
          {recipe.steps.map((step) => (
            <p className="etape__recipe" key={step.id}>{step.description}</p>
          ))}
        </div>
        </div>
      </div>
    }
    </>
  );
};

Recipe.prototype = {
  emailSuccess: PropTypes.bool.isRequired,
  shareRecipe: PropTypes.func.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  shoppingList: PropTypes.array.isRequired,
  favorite: PropTypes.array.isRequired,
  addShopList: PropTypes.func.isRequired,
  unsetFavorite: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
  setSignaled: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  recipe: PropTypes.array.isRequired,
};

export default Recipe;
