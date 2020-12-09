import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './home.scss';

const Home = ({ name, recipesUser, isLoading }) => {
  console.log('Home', recipesUser);
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
      <div className="all">
        {recipesUser.map((recipeUser) => (
              <div key={recipeUser.name} className="allrecipes__miniature">
                <div className="ui card">
                  <div className="image">
                    <i className="image icon" />
                  </div>
                  <div className="content">
                    {/* <Link to={`/recette/${recipeUser.id}`} className="header" onClick={() => showRecipe(recipeUser.id)}>{recipeUser.name}</Link> //TODO idrecette => le link */}
                    <div className="meta">
                      <span className="date">{`Posté le ${recipeUser.createdAt}`}</span>
                    </div>
                    <div className="description">{`${recipeUser.category.name} - Temps de préparation = ${recipeUser.preparationTime}`}</div>
                    {recipeUser.tags.map((tag) => (
                      <div key={tag.name} className="tags__container">
                        <span className="tag">{tag.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="extra content">
                    <Link to="/allrecipes" className="link__icon">
                      <i className="user icon" />{`By ${name}`}
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
  );
};

Home.protoTypes = {
  isLoading: PropTypes.bool.isRequired,
  recipesUser: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Home;
