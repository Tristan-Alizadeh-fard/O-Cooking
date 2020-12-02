import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <a href="/" className="toggle__item">Accueil</a>
          <a href="/ajout-recette" className="toggle__item">Ajouter</a>
          <a href="" className="toggle__item">Aide de course</a>
          <a href="" className="toggle__item">Déconnexion</a>
        </div>
      </Transition>
    </Menu>
  );
};

export default Navbar;
