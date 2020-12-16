import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import './recipe.scss';
import { setAllLoaders } from '../../actions/user';

const Recipe = ({ recipe, isLoading, setSignaled, setFavorite, unsetFavorite, addShopList, favorite, shoppingList, removeShoppingRecipe, shareRecipe, emailSuccess}) => {
  console.log('Recipe component', recipe);
  console.log('favorite', favorite);
  console.log(shoppingList);
  return (
    <>
      {isLoading && <div className="ui segment">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        </div>}
      {!isLoading && 
        <div className="container">
          <div className="image__button">
            <div className="image">
              {recipe.picture !== null && <img src={`http://localhost:8000${recipe.picture}`} className="image__recette" />}
              {recipe.picture === null &&  <div className="camera__icon"><i className="camera icon"/></div>}
            </div>
            <div className="button titi">
            {!shoppingList.find(shop => shop.id === recipe.id) && <button type="button" className="icon__addshopping" onClick={() => addShopList(recipe.id)}>Ajouter à l'aide course
                <i className="shopping cart icon" />
              </button>}
            {shoppingList.find(shop => shop.id === recipe.id) && <button type="button" className="icon__addshopping" onClick={() => removeShoppingRecipe(recipe.id)}>Retirer de l'aide course
                <i className="shopping cart icon" />
              </button>}
              {shoppingList.find(shop => shop.id === recipe.id) && <h5 className="shopList">Cette recette est dans votre aide de course</h5>}
              <button type="button" className="icon__addshopping" onClick={() => shareRecipe(recipe.id)}>Envoyer la recette sur votre email 
                <i className="paper plane icon" />
              </button>
              {emailSuccess && <h5 className="emailSuccess">Votre email à bien été envoyé</h5>}
              {!favorite.find(fav => fav.name === recipe.name) && <button type="button" className="icon__addshopping" onClick={() => setFavorite(recipe.id)}>Ajouter aux favoris
                <i className="heart icon" />
              </button>}
              {favorite.find(fav => fav.name === recipe.name) && <button type="button" className="icon__addshopping" onClick={() => unsetFavorite(recipe.id)}>Retirer des favoris
                <i className="heart outline icon" />
              </button>}
              {favorite.find(fav => fav.name === recipe.name) && <h5 className="favorite">Cette recette est dans vos favoris</h5>}
              <button type="button" className="icon__addshopping" onClick={() => setSignaled(recipe.id)}>Signaler la recette
                <i className="flag icon" />
              </button>
            </div>
         </div>
        <div className="content recipe">
        
          <h2 className="title">{recipe.name}</h2>
          <h3 className="author">{`Author: ${recipe.author.pseudo}`}</h3>
         
          <div className="tags__container">
          {recipe.tags.map((tag) => (
             <span  key={tag.id} className="tag">{tag.name}</span>
          ))}
          </div>
          {recipe.signaled && <h3 className="signaled">Signalement confirmé - Recette potentielement douteuse ! - En attente de validation par l'admin</h3>}
          
          <h3>{`- ${recipe.category.name} -`}</h3>
          <h3>{`- Temps de préparation = ${recipe.preparationTime}`}</h3>
          <h3>{`- Temps de cuisson = ${recipe.cookingTime}`}</h3>
          <div className="recette__ingredients">
          <h3 className="recette__ingredient">Liste des ingrédients</h3>
          {recipe.recipeIngredients.map((ingredient) => (
            <p key={ingredient.id}>{ingredient.quantity}</p>
          ))}
        </div>
        <div className="recette__etapes">
          <h3 className="recette__etape">Liste des étapes</h3>
          {recipe.steps.map((step) => (
            <p key={step.id}>{step.description}</p>
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






{/* <div className="recette">
<div className="image__container">
  <i className="image icon" />
</div>
<button type="button" className="icon__addshopping" onClick={() => addShopList(recipe.id)}>Ajouter à l'aide course
  <i className="shopping cart icon" />
</button>
<button type="button" className="icon__addshopping">Share
  <i className="paper plane icon" />
</button>
<button type="button" className="icon__addshopping">PDF
  <i className="file pdf icon" />
</button>
{!favorite.find(fav => fav.name === recipe.name) && <button type="button" className="icon__addshopping" onClick={() => setFavorite(recipe.id)}>Ajouter aux favoris
  <i className="heart icon" />
</button>}
{favorite.find(fav => fav.name === recipe.name) && <button type="button" className="icon__addshopping" onClick={() => unsetFavorite(recipe.id)}>Retirer des favoris
  <i className="heart outline icon" />
</button>}
<button type="button" className="icon__addshopping" onClick={() => setSignaled(recipe.id)}>Signaler la recette
  <i className="flag icon" />
</button>
<div className="recette__title">
  <h2>{recipe.name}</h2>
  {favorite.find(fav => fav.name === recipe.name) && <h3 className="favorite">Cette recette est dans vos favoris</h3>}
  {recipe.tags.map((tag) => (
            <div key={tag.id} className="tags__container">
              <span className="tag">{tag.name}</span>
            </div>
          ))}
  {recipe.signaled && <h3 className="signaled">Signalement confirmé - Recette potentielement douteuse ! - En attente de validation par l'admin</h3>}
  <p className="author">{`By ${recipe.author.pseudo}`}</p>
  <h3>{`- ${recipe.category.name} -`}</h3>
  <h3>{`- Temps de préparation = ${recipe.preparationTime}`}</h3>
  <h3>{`- Temps de cuisson = ${recipe.cookingTime}`}</h3>
</div>
<div className="recette__ingredients">
  <h3 className="recette__ingredient">Liste des ingrédients</h3>
  {recipe.recipeIngredients.map((ingredient) => (
    <p key={ingredient.id}>{ingredient.quantity}</p>
  ))}
</div>
<div className="recette__etapes">
  <h3 className="recette__etape">Liste des étapes</h3>
  {recipe.steps.map((step) => (
    <p key={step.id}>{step.description}</p>
  ))}
</div>
</div> */}
