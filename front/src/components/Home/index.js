import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import image from '../../../bbyoda.jpeg';
import './home.scss';

const Home = () => {
  console.log('Home');
  return (
    <>
      <div className="home">
        <h2 className="home__title">Bienvenue dans votre espace USER !</h2>
      </div>
      <div className="home__miniature">
      <div className="ui card">
        <div className="image">
          <img src={image}/>
        </div>
        <div className="content">
          <Link to="/recette/slug" className="header">Pot au feu de BB Yoda</Link>
          <div className="meta">
            <span className="date">Posté le 02/12/2020</span>
            <span className="date">Modifié le 02/12/2020</span>
          </div>
          <div className="description">
            Plats - Temps de réalisation: 2h30mn
          </div>
        </div>
        <div className="extra content">
          <Link to="/home" className="link__icon">
            <i className="user icon" />By TITI
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
    </>
  );
};

export default Home;
