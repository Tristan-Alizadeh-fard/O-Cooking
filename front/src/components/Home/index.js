import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import testimage from 'src/pictures/sandwich.jpg';
import './home.scss';
import time from 'src/pictures/horloge.png';
import entree from 'src/pictures/entree.png';
import sandwich from 'src/pictures/sandwich.png';
import sauce from 'src/pictures/sauce.png';
import plat from 'src/pictures/plat.png';
import smoothie from 'src/pictures/smoothie.png';
import soupe from 'src/pictures/soupe.png';
import dessert from 'src/pictures/dessert.png';

const Home = ({ name, recipesUser, isLoading, showRecipe, setLoader, setFavorite, unsetFavorite, favorite, addShopList, removeShoppingRecipe, shoppingList, unsetEmailSuccess }) => {
  const setLoaderHomerecipes = (id) => {
    setLoader();
    unsetEmailSuccess();
    showRecipe(id);
  };
  return (
    <>
    {isLoading && <div className="ui segment">
        <div className="ui active dimmer">
        <div className="ui text loader">Chargement...</div>
        </div>
        </div>}
      <div className="allrecipes">
        <h3 className="allrecipes__title">{`Bienvenue dans votre espace " ${name} " !`}</h3>
      </div>
      {!isLoading && recipesUser.length === 0 && <p className="user__norecipes">Vous n'avez pas encore ajouté de recette à votre espace.</p>}
      {!isLoading && recipesUser.length === 0 && <p className="user__norecipes">Cliquer sur Ajouter une recette, on attend plus que vous !</p>}
      {!isLoading && 
       <div className="w3-row-padding w3-padding-16 w3-center">
       {recipesUser.map((recipeUser) => (
         <div key={recipeUser.id} className="w3-quarter">
              {recipeUser.picture !== null && <div className="img-container"><img src={`http://localhost:8000${recipeUser.picture}`} className="image__allrecipes" /></div>}
              {recipeUser.picture === null &&  <div className="img-container"><div className="camera mini"><i className="camera icon"/></div></div>}
              {!favorite.find(fav => fav.name === recipeUser.name) && <Link to="/home" className="link__icon" onClick={() => setFavorite(recipeUser.id)}>
                    <i className="heart outline icon" />Ajouter aux favoris
                  </Link>}
                  {favorite.find(fav => fav.name === recipeUser.name) && <Link to="/home" className="link__icon" onClick={() => unsetFavorite(recipeUser.id)}>
                    <i className="heart icon" />Retirer de vos favoris
                  </Link>}
                  {recipeUser.signaled && <div className="favoris__icon">
                <i className="bell icon" />
                <p className="text__favoris">Recette signalé !</p>
              </div>}
                  <div className="content">
                    <Link to={`/recette/${recipeUser.id}`} className="header" onClick={() => setLoaderHomerecipes(recipeUser.id)}>{recipeUser.name}</Link>
                    <Link to={`/recette/${recipeUser.id}`} className="header__plus" onClick={() => setLoaderHomerecipes(recipeUser.id)}>Voir plus</Link>
                  {recipeUser.category.name === 'Entrée' && <div className="description"><img src={entree} />{` ${recipeUser.category.name}`}</div>}
                  {recipeUser.category.name === 'Plat' && <div className="description"><img src={plat} />{` ${recipeUser.category.name}`}</div>}
                  {recipeUser.category.name === 'Dessert' && <div className="description"><img src={dessert} />{` ${recipeUser.category.name}`}</div>}
                  {recipeUser.category.name === 'Sauce' && <div className="description"><img src={sauce} />{` ${recipeUser.category.name}`}</div>}
                  {recipeUser.category.name === 'Smoothie' && <div className="description"><img src={smoothie} />{` ${recipeUser.category.name}`}</div>}
                  {recipeUser.category.name === 'Soupe' && <div className="description"><img src={soupe} />{` ${recipeUser.category.name}`}</div>}
                  {recipeUser.category.name === 'Sandwich' && <div className="description"><img src={sandwich} />{` ${recipeUser.category.name}`}</div>}
                  <div className="description"><img src={time} />{` ${recipeUser.preparationTime}`}</div>
                    <div className="tags__container">
                    {recipeUser.tags.map((tag) => (
                      <div key={tag.name} className="tag__container">
                        <span className="tag">{tag.name}</span>
                      </div>
                    ))}
                    </div>
                  </div>
                  <div className="extra content">
                    {!shoppingList && <Link to="/home" className="link__icon" onClick={() => addShopList(recipeUser.id)}>
                    <i className="cart arrow down icon" />Ajouter à l'aide de course
                  </Link>}
                  {shoppingList && !shoppingList.find(shop => shop.id === recipeUser.id) &&<Link to="/home" className="link__icon" onClick={() => addShopList(recipeUser.id)}>
                    <i className="cart arrow down icon" />Ajouter à l'aide de course
                  </Link>}
                  {shoppingList && shoppingList.find(shop => shop.id === recipeUser.id) && <Link to="/home" className="link__icon" onClick={() => removeShoppingRecipe(recipeUser.id)}>
                    <i className="shopping cart icon" />Retirer de l'aide de course
                  </Link>}
                  </div>
                  <p className="link__author">
                <i className="user icon" />{name}
              </p>
              <div className="meta">
                <span className="date">{`Posté le ${recipeUser.createdAt}`}</span>
              </div>  
              </div>
       ))}
      </div>}
    </>
  );
};

Home.protoTypes = {
  unsetEmailSuccess: PropTypes.func.isRequired,
  shoppingList: PropTypes.array.isRequired,
  removeShoppingRecipe: PropTypes.func.isRequired,
  addShopList: PropTypes.func.isRequired,
  favorite: PropTypes.array.isRequired,
  setFavorite: PropTypes.func.isRequired,
  unsetFavorite: PropTypes.func.isRequired,
  setLoader: PropTypes.func.isRequired,
  showRecipe: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  recipesUser: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Home;
