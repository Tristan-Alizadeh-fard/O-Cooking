import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Transition } from 'semantic-ui-react';
import './navbar.scss';

// <Dropdown text="Menu" options={options} simple item />

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(!visible);

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
