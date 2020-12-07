import React from 'react';
import { Link } from 'react-router-dom';
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

    <div className="conteneur-contenu">
      <p>Du contenu sous le menu</p>
    </div>
  </>
);

export default Navbar;
