import React from 'react';
import { Route } from 'react-router-dom';
import './page.scss';
import Navbar from 'src/components/Navbar';
import ConnectedShoppingList from 'src/containers/ConnectedShoppingList'
import ConnectedLoginForm from 'src/containers/ConnectedLoginForm';
import ConnectedInscriptionForm from 'src/containers/ConnectedInscriptionForm';
import ConnectedAddRecipeForm from 'src/containers/ConnectedAddRecipeForm';
import ConnectedHome from 'src/containers/ConnectedHome';
import ConnectedRecipe from 'src/containers/ConnectedRecipe';


// Page : this component manage the other components with a props called isLogged
// means => if the user isLogged the Navbar (or his parent component if we create
// an other one) component is shown, if he is not the Navbar is hidden

const Page = () => (
  <div>
    <Navbar />

    <Route
      path="/inscription"
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
      path="/ajout-recette"
    >
      <ConnectedAddRecipeForm />
    </Route>

    <Route
      path="/aide-course"
    >
      <ConnectedShoppingList />
    </Route>

    <Route
      path="/recette/slug"
      exact
    >
      <ConnectedRecipe />
    </Route>
  </div>
);

export default Page;
