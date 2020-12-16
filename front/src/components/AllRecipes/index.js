import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import testimage from 'src/pictures/sandwich.jpg';
import ConnectedSearchBar from 'src/containers/ConnectedSearchBar';
import './allrecipes.scss';
import { setFavoriteAction } from 'src/actions/user';

const AllRecipes = ({ recipes, showRecipe, isLoading, setLoader, setFavorite, unsetFavorite, favorite }) => {
  console.log('AllRecipes', recipes);
  const setLoaderAllrecipes = (id) => {
    setLoader();
    showRecipe(id);
  };
  return (
    <>
      {!isLoading && <ConnectedSearchBar />}
      {isLoading && <div className="ui segment">
        <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
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
                
                  <img src={testimage} className="image__recette" />
              
                {recipe.signaled && <div className="favoris__icon">
                <i className="bell icon" />
                <p className="text__favoris">Recette signalé !</p>
              </div>}
                <div className="content">
                  <Link to={`/recette/${recipe.id}`} className="header" onClick={() => setLoaderAllrecipes(recipe.id)}>{recipe.name}</Link>
                  <div className="meta">
                    <span className="date">{`Posté le ${recipe.createdAt}`}</span>
                  </div>
                  <div className="description">{`${recipe.category.name} - Temps de préparation = ${recipe.preparationTime}`}</div>
                  <div className="tags__container">
                  {recipe.tags.map((tag) => (
                    <div key={tag.name} className="tag__container">
                      <span className="tag">{tag.name}</span>
                    </div>
                  ))}
                  </div>
                </div>
                <div className="extra content">
                  <p className="link__author">
                    <i className="user icon" />{`By ${recipe.author.pseudo}`}
                  </p>
                  <Link to="/aide-course" className="link__icon" onClick={() => console.log('aide de course')}>
                    <i className="shopping cart icon" />Ajouter à l'aide de course
                  </Link>
                  {!favorite.find(fav => fav.name === recipe.name) && <Link to="/allrecipes" className="link__icon" onClick={() => setFavorite(recipe.id)}>
                    <i className="heart icon" />Ajouter aux favoris
                  </Link>}
                  {favorite.find(fav => fav.name === recipe.name) && <Link to="/allrecipes" className="link__icon" onClick={() => unsetFavorite(recipe.id)}>
                    <i className="heart outline icon" />Retirer de vos favoris
                  </Link>}
                </div>
                {favorite.find(fav => fav.name === recipe.name) && <div className="favoris__icon">
                <i className="heart icon" />
                <p className="text__favoris">Ajouté aux favoris</p>
              </div>}
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
  favorite: PropTypes.array.isRequired,
  unsetFavorite: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
  setLoader: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
};

export default AllRecipes;
