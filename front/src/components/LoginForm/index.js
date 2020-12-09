import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './loginForm.scss';

const LoginForm = ({ updateField, logIn, logOut, errorLogin, isLogged, showDescription, descriptionOn, getAllrecipes, email, pass, setLoader, getUserRecipes }) => {
  const submitLogin = (event) => {
    event.preventDefault();
    logIn();
  };
  const setLoaderLogin = () => {
    setLoader();
    getUserRecipes();
  };

  return (
    <>
      <div className="home">
        <h2 className="home__title">Bienvenue Chez O'Coocking</h2>
        <h3 className="home__smalltitle">L'application des passionnés de cuisine</h3>
        <div className="home__more">
          {!descriptionOn && <Button onClick={() => showDescription()}>Voir plus</Button>}
        </div>
        {descriptionOn && <p className="home__content">- Consulter toutes les recettes de la communauté</p>}
        {descriptionOn && <p className="home__content">- Générer une aide de course à partir d'une recette</p>}
        {descriptionOn && <p className="home__content">- Ajouter vos propres recettes</p>}
        <div className="home__less">
          {descriptionOn && <Button onClick={() => showDescription()}>Voir moins</Button>}
        </div>
      </div>
      <div className="form__login">
        {errorLogin && <div className="error__login">Vérifiez votre Email ou Password</div>}
        {isLogged && <Link to="/home" className="login__ok" onClick={() => setLoaderLogin()}>Login Success !</Link>}
        <Form>
          {!isLogged && <p>Formulaire de login</p>}
          <Form.Field>
            {!isLogged && <Form.Input fluid label="Votre Email" placeholder="Votre email" value={email} onChange={() => updateField(event.target.value, 'email')} />}
            {!isLogged && <Form.Input fluid label="Votre Mot de passe" type="password" placeholder="Votre password" value={pass} onChange={() => updateField(event.target.value, 'pass')} />}
          </Form.Field>
          {!isLogged && <Button type="submit" onClick={submitLogin}>Login</Button>}
        </Form>
      </div>
      <div className="link__inscription">
        {!isLogged && <Link className="inscription" to="/inscription">Inscrivez-vous !</Link>}
      </div>
      <div className="link__forgottenpass">
        {!isLogged && <Link className="forgotten__password" to="/">Mot de passe oublié ?</Link>}
      </div>
    </>
  );
};

LoginForm.prototypes = {
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  errorLogin: PropTypes.bool.isRequired,
  descriptionOn: PropTypes.bool.isRequired,
  showDescription: PropTypes.func.isRequired,
  updateField: PropTypes.func.isRequired,
  logIn: PropTypes.func.isRequired,
  getAllrecipes: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  setLoader: PropTypes.func.isRequired,
  getUserRecipes: PropTypes.func.isRequired,
};

export default LoginForm;
