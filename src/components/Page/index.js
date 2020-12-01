import React from 'react';
import { Route } from 'react-router-dom';
import './page.scss';
import Navbar from 'src/components/Navbar';
import LoginForm from 'src/components/LoginForm';
import InscriptionForm from 'src/components/InscriptionForm';

// Page : this component manage the other components with a props called isLogged
// means => if the user isLogged the Navbar (or his parent component if we create
// an other one) component is shown, if he is not the Navbar is hidden

const Page = () => (
  <div className="page">
    <header className="page__header">
      <span className="page__icon">Icon</span>
      <h2 className="page__title">O'Coocking</h2>
      <Navbar />
    </header>
    <Route
      path="/connection"
    >
      <LoginForm />
    </Route>
    <Route
      path="/inscription"
    >
      <InscriptionForm />
    </Route>

    <Route
      path="/accueil"
    >
      <></>
    </Route>

    <Route
      path="/ajout-recette"
    >
      <></>
    </Route>

    <Route
      path="/aide-course"
    >
      <></>
    </Route>
    <Route
      path="/recette/slug"
    >
      <></>
    </Route>
  </div>
);

export default Page;
