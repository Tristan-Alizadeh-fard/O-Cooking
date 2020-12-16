import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import testimage from 'src/pictures/sandwich.jpg';
import './home.scss';

const Home = ({ name, recipesUser, isLoading, showRecipe, setLoader, setFavorite, unsetFavorite, favorite, addShopList, removeShoppingRecipe, shoppingList }) => {

  console.log('Home', recipesUser);
  const setLoaderHomerecipes = (id) => {
    setLoader();
    showRecipe(id);
  };
  return (
    <>
    {isLoading && <div className="ui segment">
        <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
        </div>
        </div>}
      <div className="allrecipes">
        <h2 className="allrecipes__title">{`Bienvenue dans votre espace " ${name} " !`}</h2>
      </div>
      {!isLoading && 
      
        <div className="w3-row-padding w3-padding-16 w3-center">
       {recipesUser.map((recipeUser) => (
         <div key={recipeUser.id} className="w3-quarter">
              
                
              <img src={`http://localhost:8000${recipeUser.picture}`} className="image__home" />
                  {recipeUser.signaled && <div className="favoris__icon">
                <i className="bell icon" />
                <p className="text__favoris">Recette signalé !</p>
              </div>}
                  <div className="content">
                    <Link to={`/recette/${recipeUser.id}`} className="header" onClick={() => setLoaderHomerecipes(recipeUser.id)}>{recipeUser.name}</Link>
                    <div className="meta">
                      <span className="date">{`Posté le ${recipeUser.createdAt}`}</span>
                    </div>
                    <div className="description">{`${recipeUser.category.name} - Temps de préparation = ${recipeUser.preparationTime}`}</div>
                    <div className="tags__container">
                    {recipeUser.tags.map((tag) => (
                      <div key={tag.name} className="tag__container">
                        <span className="tag">{tag.name}</span>
                      </div>
                    ))}
                    </div>
                  </div>
                  <div className="extra content">
                    <p className="link__author">
                      <i className="user icon" />{`By ${name}`}
                    </p>
                    {!shoppingList && <Link to="/home" className="link__icon" onClick={() => addShopList(recipeUser.id)}>
                    <i className="shopping cart icon" />Ajouter à l'aide de course
                  </Link>}
                  {shoppingList && !shoppingList.find(shop => shop.id === recipeUser.id) &&<Link to="/home" className="link__icon" onClick={() => addShopList(recipeUser.id)}>
                    <i className="shopping cart icon" />Ajouter à l'aide de course
                  </Link>}
                  {shoppingList && shoppingList.find(shop => shop.id === recipeUser.id) && <Link to="/home" className="link__icon" onClick={() => removeShoppingRecipe(recipeUser.id)}>
                    <i className="shopping cart icon" />Retirer de l'aide de course
                  </Link>}
                  {shoppingList && shoppingList.find(shop => shop.id === recipeUser.id) && <h6 className="inShopingList">Recette présente dans votre aide de course</h6>}
                  {!favorite.find(fav => fav.name === recipeUser.name) && <Link to="/home" className="link__icon" onClick={() => setFavorite(recipeUser.id)}>
                      <i className="heart icon" />Ajouter aux favoris
                    </Link>}
                    {favorite.find(fav => fav.name === recipeUser.name) && <Link to="/home" className="link__icon" onClick={() => unsetFavorite(recipeUser.id)}>
                      <i className="heart outline icon" />Retirer de vos favoris
                    </Link>}
                  </div>
                  {favorite.find(fav => fav.name === recipeUser.name) && <div className="favoris__icon">
                
                <h5 className="text__favoris">Recette ajouté aux favoris</h5>
              </div>}
                
              </div>
              
        ))}
       
      </div>}
    </>
  );
};

Home.protoTypes = {
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
