import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './allrecipes.scss';

const AllRecipes = ({ recipes, showRecipe, isLoading, setLoader }) => {
  console.log('AllRecipes', recipes);
  const setLoaderAllrecipes = (id) => {
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
      {!isLoading && 
      <>
        <div className="allrecipes">
          <h2 className="allrecipes__title">Voici toutes les recettes de la communauté</h2>
        </div>
        <div className="all">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="allrecipes__miniature">
              <div className="ui card">
                <div className="image">
                  <i className="image icon" />
                </div>
                <div className="content">
                  <Link to={`/recette/${recipe.id}`} className="header" onClick={() => setLoaderAllrecipes(recipe.id)}>{recipe.name}</Link>
                  <div className="meta">
                    <span className="date">{`Posté le ${recipe.createdAt}`}</span>
                  </div>
                  <div className="description">{`${recipe.category.name} - Temps de préparation = ${recipe.preparationTime}`}</div>
                  {recipe.tags.map((tag) => (
                    <div key={tag.name} className="tags__container">
                      <span className="tag">{tag.name}</span>
                    </div>
                  ))}
                </div>
                <div className="extra content">
                  <Link to="/allrecipes" className="link__icon">
                    <i className="user icon" />{`By ${recipe.author.pseudo}`}
                  </Link>
                  <Link to="/aide-course" className="link__icon" onClick={() => console.log('aide de course')}>
                    <i className="shopping cart icon" />Ajouter à l'aide de course
                  </Link>
                  <Link to="" className="link__icon" onClick={() => console.log('modification d\'une recette')}>
                    <i className="edit icon" />Modifier la recette
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
      }
    </>
  );
};

AllRecipes.propTypes = {
  setLoader: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  showRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.array.isRequired,
};

export default AllRecipes;
