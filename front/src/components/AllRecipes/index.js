import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ConnectedSearchBar from 'src/containers/ConnectedSearchBar';
import './allrecipes.scss';
import { setFavoriteAction } from 'src/actions/user';
import time from 'src/pictures/horloge.png';
import entree from 'src/pictures/entree.png';
import sandwich from 'src/pictures/sandwich.png';
import sauce from 'src/pictures/sauce.png';
import plat from 'src/pictures/plat.png';
import smoothie from 'src/pictures/smoothie.png';
import soupe from 'src/pictures/soupe.png';
import dessert from 'src/pictures/dessert.png';

const AllRecipes = ({ recipes, showRecipe, isLoading, setLoader, setFavorite, unsetFavorite, favorite, unsetEmailSuccess, addShopList, removeShoppingRecipe, shoppingList }) => {
  const setLoaderAllrecipes = (id) => {
    setLoader();
    unsetEmailSuccess();
    showRecipe(id);
  };
  return (
    <>
      {!isLoading && <ConnectedSearchBar />}
      {isLoading && <div className="ui segment">
        <div className="ui active dimmer">
        <div className="ui text loader">Chargement...</div>
        </div>
        </div>}
      {!isLoading && 
      <>
        <div className="allrecipes">
          <h3 className="allrecipes__title">Voici toutes les recettes de la communauté</h3>
        </div>
        <div className="w3-row-padding w3-padding-16 w3-center">
          {recipes.map((recipe) => (
            
              <div key={recipe.id} className="w3-quarter">
                
                  {recipe.picture !== null && <div className="img-container"><img src={`/api${recipe.picture}`} className="image__allrecipes" /></div>}
                  {recipe.picture === null &&  <div className="img-container"><div className="camera mini"><i className="camera icon"/></div></div>}
                  {!favorite.find(fav => fav.name === recipe.name) && <Link to="/allrecipes" className="link__icon" onClick={() => setFavorite(recipe.id)}>
                    <i className="heart outline icon" />Ajouter aux favoris
                  </Link>}
                  {favorite.find(fav => fav.name === recipe.name) && <Link to="/allrecipes" className="link__icon" onClick={() => unsetFavorite(recipe.id)}>
                    <i className="heart icon" />Retirer de vos favoris
                  </Link>}
                {recipe.signaled && <div className="favoris__icon">
                <i className="bell icon" />
                <p className="text__favoris">Recette signalée !</p>
              </div>}
                <div className="content">
                  <Link to={`/recette/${recipe.id}`} className="header" onClick={() => setLoaderAllrecipes(recipe.id)}>{recipe.name}</Link>
                  <Link to={`/recette/${recipe.id}`} className="header__plus" onClick={() => setLoaderAllrecipes(recipe.id)}>Voir plus</Link>
                  {recipe.category.name === 'Entrée' && <div className="description"><img src={entree} />{` ${recipe.category.name}`}</div>}
                  {recipe.category.name === 'Plat' && <div className="description"><img src={plat} />{` ${recipe.category.name}`}</div>}
                  {recipe.category.name === 'Dessert' && <div className="description"><img src={dessert} />{` ${recipe.category.name}`}</div>}
                  {recipe.category.name === 'Sauce' && <div className="description"><img src={sauce} />{` ${recipe.category.name}`}</div>}
                  {recipe.category.name === 'Smoothie' && <div className="description"><img src={smoothie} />{` ${recipe.category.name}`}</div>}
                  {recipe.category.name === 'Soupe' && <div className="description"><img src={soupe} />{` ${recipe.category.name}`}</div>}
                  {recipe.category.name === 'Sandwich' && <div className="description"><img src={sandwich} />{` ${recipe.category.name}`}</div>}
                  <div className="description"><img src={time} />{` ${recipe.preparationTime}`}</div>
                  <div className="tags__container">
                  {recipe.tags.map((tag) => (
                    <div key={tag.name} className="tag__container">
                      <span className="tag">{tag.name}</span>
                    </div>
                  ))}
                  </div>
                </div>
                <div className="extra content">
                  {!shoppingList && <Link to="/allrecipes" className="link__icon" onClick={() => addShopList(recipe.id)}>
                    <i className="cart arrow down" />Ajouter à l'aide de course
                  </Link>}
                  {shoppingList && !shoppingList.find(shop => shop.id === recipe.id) &&<Link to="/allrecipes" className="link__icon" onClick={() => addShopList(recipe.id)}>
                    <i className="cart arrow down icon" />Ajouter à l'aide de course
                  </Link>}
                  {shoppingList && shoppingList.find(shop => shop.id === recipe.id) && <Link to="/allrecipes" className="link__icon" onClick={() => removeShoppingRecipe(recipe.id)}>
                    <i className="shopping cart icon" />Retirer de l'aide de course
                  </Link>}
                 </div>
                  <p className="link__author">
                    <i className="user icon" />{recipe.author.pseudo}
                  </p>
              <div className="meta">
                    <span className="date">{`Posté le ${recipe.createdAt}`}</span>
                  </div>
              </div>
          ))}
        </div>
        </>
      }
      {recipes.length < 1 && <div className="no-result"><p>Pas de résultat pour cette recherche</p></div>}
    </>
  );
};

AllRecipes.propTypes = {
  shoppingList: PropTypes.array.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  addShopList: PropTypes.func.isRequired,
  unsetEmailSuccess: PropTypes.func.isRequired,
  favorite: PropTypes.array.isRequired,
  unsetFavorite: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
  setLoader: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
};

export default AllRecipes;
