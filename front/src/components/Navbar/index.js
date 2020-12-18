import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Prototypes, { checkPropTypes } from 'prop-types';

const Navbar = ({ logOut, admin, getAllrecipes, getUserRecipes, setLoader, getShopList, getFormSettings, recipesUser }) => {
  const setLoaderHome = () => {
    setLoader();
    getShopList();
    getUserRecipes();
  };
  const setLoaderAllrecipes = () => {
    setLoader();
    getShopList();
    getAllrecipes();
  };
  const setLoaderShopList = () => {
    setLoader();
    getShopList();
  };
  return (
    <nav>
      <div className="conteneur-nav">
        <label htmlFor="mobile">Afficher / Cacher le menu</label>
        <input type="checkbox" id="mobile" role="button" />
        <ul>
          <li className="deroulan"><Link to="/home" onClick={() => setLoaderHome()}> Votre espace &ensp;</Link>
            <ul className="sous" />
          </li>
          <li className="deroulan"><Link to="/allrecipes" onClick={() => setLoaderAllrecipes()}> Toutes les recettes &ensp;</Link>
            <ul className="sous" />
          </li>
          <li className="deroulan"><Link to="/ajout-recette" onClick={() => getFormSettings()}>Ajouter une recette &ensp;</Link>
            <ul className="sous" />
          </li>
          <li><Link to="/aide-course" onClick={() => setLoaderShopList()}>Aide de course</Link></li>
          <li><Link to="/about">A propos</Link></li>
          {admin[0] === 'ROLE_ADMIN' && <li><a href="http://localhost:8000/admin" target="_blank">Admin</a></li>}
          <li><Link to="/" onClick={() => logOut()}>Déconnexion</Link></li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.prototypes = {
  recipesUser: Prototypes.array.isRequired,
  getShopList: Prototypes.func.isRequired,
  setLoader: Prototypes.func.isRequired,
  getUserRecipes: Prototypes.func.isrequired,
  getAllrecipes: Prototypes.func.isRequired,
  logOut: Prototypes.func.isrequired,
  admin: Prototypes.object.isrequired,
};

export default Navbar;
