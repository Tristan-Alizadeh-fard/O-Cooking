import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './allrecipes.scss';

const AllRecipes = ({ recipes }) => {
  console.log('AllRecipes', recipes);
  return (
    <>
      <div className="allrecipes">
        <h2 className="allrecipes__title">Voici toutes les recettes de la communauté</h2>
      </div>
      {recipes.map((recipe) => (
      <div key={recipe.id} className="allrecipes__miniature">
      <div className="ui card">
        <div className="image">
          <img src="" />
        </div>
        <div className="content">
          <Link to="/recette/slug" className="header">{recipe.name}</Link>
          <div className="meta">
            <span className="date">Posté le 02/12/2020</span>
            <span className="date">Modifié le 02/12/2020</span>
          </div>
          <div className="description">
            Plats - Temps de réalisation: 2h30mn
          </div>
        </div>
        <div className="extra content">
          <Link to="/allrecipes" className="link__icon">
            <i className="user icon" />By {recipe.pseudo}
          </Link>
          <Link to="/aide-course" className="link__icon" onClick={() => console.log('aide de course')}>
            <i className="shopping cart icon" />Ajouter à l'aide de course
          </Link>
          <Link to="/" className="link__icon" onClick={() => console.log('modification d\'une recette')}>
            <i className="edit icon" />Modifier la recette
          </Link>
        </div>
      </div>
      </div>
      ))}
    </>
  );
};

AllRecipes.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default AllRecipes;
