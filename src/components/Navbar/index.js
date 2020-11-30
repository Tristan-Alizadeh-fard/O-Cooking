import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Button, Menu, Transition } from 'semantic-ui-react';
import './navbar.scss';

// <Dropdown text="Menu" options={options} simple item />

const Navbar = () => {
    var visible = true;
    const state = { visible: false };

    const toggleVisibility = () => {
        visible = !state.visible;
    };

    return (
        <Menu className="menu" compact>
            <Button
                content={visible ? 'Hide' : 'Show'}
                onClick={toggleVisibility}
            />
            <Transition visible={state.visible} animation='scale' duration={2000}>
                <div>
                    <a href='#'>Accueil</a>
                    <a href='#'>Ajouter une recette</a>
                    <a href='#'>Aide de course</a>
                    <a href='#'>Déconnection</a>
                </div>
            </Transition>
        </Menu>
)};

export default Navbar;
