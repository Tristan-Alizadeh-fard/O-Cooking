import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Prototypes from 'prop-types';

const Navbar = ({ logOut, admin, getAllrecipes, getUserRecipes }) => (
  <nav>
    <div className="conteneur-nav">
      <label htmlFor="mobile">Afficher / Cacher le menu</label>
      <input type="checkbox" id="mobile" role="button" />
      <ul>
        <li className="deroulan"><Link to="/"> Accueil &ensp;</Link>
          <ul className="sous" />
        </li>
        <li className="deroulan"><Link to="/home" onClick={() => getUserRecipes()}> Votre espace &ensp;</Link>
          <ul className="sous" />
        </li>
        <li className="deroulan"><Link to="/allrecipes" onClick={() => getAllrecipes()}> Toutes les recettes &ensp;</Link>
          <ul className="sous" />
        </li>
        <li className="deroulan"><Link to="/ajout-recette">Ajouter une recette &ensp;</Link>
          <ul className="sous" />
        </li>
        <li><Link to="/aide-course">Liste de course</Link></li>
        <li><Link to="/" onClick={() => logOut()}>Déconnexion</Link></li>
        {admin && <li><Link to="">Admin</Link></li>}
      </ul>
    </div>
  </nav>
);

Navbar.prototypes = {
  getUserRecipes: Prototypes.func.isrequired,
  getAllrecipes: Prototypes.func.isRequired,
  logOut: Prototypes.func.isrequired,
  admin: Prototypes.bool.isrequired,
};

export default Navbar;
