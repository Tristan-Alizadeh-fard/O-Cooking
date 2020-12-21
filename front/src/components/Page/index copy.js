import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Prototypes from 'prop-types';
import './page.scss';
import ConnectedShoppingList from 'src/containers/ConnectedShoppingList';
import ConnectedNavbar from 'src/containers/ConnectedNavbar';
import ConnectedLoginForm from 'src/containers/ConnectedLoginForm';
import ConnectedInscriptionForm from 'src/containers/ConnectedInscriptionForm';
import ConnectedAddRecipeForm from 'src/containers/ConnectedAddRecipeForm';
import ConnectedHome from 'src/containers/ConnectedHome';
import ConnectedRecipe from 'src/containers/ConnectedRecipe';
import ConnectedAllRecipes from 'src/containers/ConnectedAllRecipes';
import About from 'src/components/About';

// Page : this component manage the other components with a props called isLogged
// means => if the user isLogged the Navbar (or his parent component if we create
// an other one) component is shown, if he is not the Navbar is hidden 

const Page = ({ isLogged }) => (
  <div>
    {isLogged && <ConnectedNavbar />}
    <Route
      path="localhost:8080/inscription"
    >
      <ConnectedInscriptionForm />
    </Route>

    <Route
      path="/"
      exact
    >
      <ConnectedLoginForm />
    </Route>

    <Route
      path="/home"
      exact
    >
      <ConnectedHome />
    </Route>

    <Route
      path="/allrecipes"
      exact
    >
      <ConnectedAllRecipes />
    </Route>

    <Route
      path="localhost:8080/ajout-recette"
    >
      <ConnectedAddRecipeForm />
    </Route>

    <Route
      path="localhost:8080/aide-course"
    >
      <ConnectedShoppingList />
    </Route>

    <Route
      path="localhost:8080/recette/:id"
      exact
    >
      <ConnectedRecipe />
    </Route>
    <Route
      path="localhost:8080/about"
      exact
    >
      <About />
    </Route>
  </div>
);

Page.prototypes = {
  isLogged: Prototypes.bool.isrequired,
};

export default Page;
