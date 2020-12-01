import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './loginForm.scss';

const LoginForm = ({ updateField, logIn, errorLogin, isLogged }) => {
  const submitLogin = (event) => {
    event.preventDefault();
    logIn();
  };

  return (
    <>
      <div className="home">
        <h2 className="home__title">Bienvenue Chez O'Coocking</h2>
        <p className="home__description">Description de l'application</p>
        <p className="home__content">- Consulter toutes les recettes de la communauté</p>
        <p className="home__content">- Générer une aide de course à partir d'une recette</p>
        <p className="home__content">- Ajouter vos propres recettes</p>
      </div>
      <div className="form__login">
        {errorLogin && <div className="error__login">Vérifiez votre Email ou Password</div>}
        <Form>
          <p>Formulaire de login</p>
          <Form.Field>
            <Form.Input fluid label="Votre Email" placeholder="Votre email" onChange={() => updateField(event.target.value, 'email')} />
            <Form.Input fluid label="Votre Mot de passe" type="password" placeholder="Votre password" onChange={() => updateField(event.target.value, 'pass')} />
          </Form.Field>
          <Button type="submit" onClick={submitLogin}>Login</Button>
        </Form>
      </div>
      <div className="link__inscription">
        <Link className="inscription" to="/inscription">Inscrivez-vous !</Link>
      </div>
      <div className="link__forgottenpass">
        <Link className="forgotten__password" to="/">Mot de passe oublié ?</Link>
      </div>
    </>
  );
};

LoginForm.prototypes = {
  isLogged: PropTypes.bool.isRequired,
  errorLogin: PropTypes.bool.isRequired,
  updateField: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
};

export default LoginForm;
