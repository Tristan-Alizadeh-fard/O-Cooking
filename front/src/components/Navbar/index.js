
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Transition } from 'semantic-ui-react';
import './navbar.scss';



// <Dropdown text="Menu" options={options} simple item />

const Navbar = () => (
  <>
    <nav>
      <div className="conteneur-nav">
          <label for="mobile">Afficher / Cacher le menu</label>
          <input type="checkbox" id="mobile" role="button"></input>
        <ul>
          <li className="deroulan"><Link to="/home"> Acceuil &ensp;</Link>
            <ul className="sous">

            </ul>
          </li>
          <li className="deroulan"><Link to="/ajout-recette">Ajouter une recette &ensp;</Link>
            <ul className="sous">
            </ul>
          </li>
          <li><Link to="/aide-course">Liste de course</Link></li>
          <li><Link to="">Déconnexion</Link></li>
          <li><Link to="">Admin</Link></li>
        </ul>
      </div>
    </nav>


  return (
    <Menu className="menu" compact>
      <Button
        content={visible ? 'Hide' : 'Show'}
        onClick={toggleVisibility}
      />
      <Transition visible={visible} animation="fade" duration={500}>
        <div className="menu__toggle">
          <Link to="/" className="toggle__item">Accueil</Link>
          <Link to="/ajout-recette" className="toggle__item">Ajouter</Link>
          <Link to="" className="toggle__item">Aide de course</Link>
          <Link to="/allrecipes" className="toggle__item">Toutes les recettes</Link>
          <Link to="" className="toggle__item">Déconnexion</Link>
        </div>
      </Transition>
    </Menu>
  );
};

export default Navbar;
