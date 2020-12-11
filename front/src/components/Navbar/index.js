import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Prototypes from 'prop-types';

const Navbar = ({ logOut, admin, getAllrecipes, getUserRecipes, setLoader, getShopList, getFormSettings }) => {
  const setLoaderHome = () => {
    setLoader();
    getUserRecipes();
  };
  const setLoaderAllrecipes = () => {
    setLoader();
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
          <li><Link to="/aide-course" onClick={() => setLoaderShopList()}>Liste de course</Link></li>
          <li><Link to="/" onClick={() => logOut()}>Déconnexion</Link></li>
          {admin && <li><Link to="">Admin</Link></li>}
        </ul>
      </div>
    </nav>
  );
};

Navbar.prototypes = {
  getShopList: Prototypes.func.isRequired,
  setLoader: Prototypes.func.isRequired,
  getUserRecipes: Prototypes.func.isrequired,
  getAllrecipes: Prototypes.func.isRequired,
  logOut: Prototypes.func.isrequired,
  admin: Prototypes.bool.isrequired,
};

export default Navbar;
