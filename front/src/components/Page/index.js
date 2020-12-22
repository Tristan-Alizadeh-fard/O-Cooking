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

    <Route exact path="/">
      <ConnectedLoginForm />
    </Route>

    <Route exact path="http://ec2-100-25-30-18.compute-1.amazonaws.com/inscription">
      <Redirect to="/inscription" />
    </Route>

    <Route exact path="/inscription">
      <ConnectedInscriptionForm />
    </Route>

    <Route exact path="http://ec2-100-25-30-18.compute-1.amazonaws.com/home">
      <Redirect to="/home" />
    </Route>

    <Route exact path="/home">
      <ConnectedHome />
    </Route>

    <Route exact path="http://ec2-100-25-30-18.compute-1.amazonaws.com/allrecipes">
      <Redirect to="/allrecipes" />
    </Route>

    <Route exact path="/allrecipes">
      <ConnectedAllRecipes />
    </Route>

    <Route exact path="http://ec2-100-25-30-18.compute-1.amazonaws.com/ajout-recette">
      <Redirect to="/ajout-recette" />
    </Route>

    <Route exact path="/ajout-recette">
      <ConnectedAddRecipeForm />
    </Route>

    <Route exact path="http://ec2-100-25-30-18.compute-1.amazonaws.com/aide-course">
      <Redirect to="/aide-course" />
    </Route>

    <Route exact path="/aide-course">
      <ConnectedShoppingList />
    </Route>

    <Route exact path="http://ec2-100-25-30-18.compute-1.amazonaws.com/recette/:id">
      <Redirect to="/recette/:id" />
    </Route>

    <Route exact path="/recette/:id">
      <ConnectedRecipe />
    </Route>

    <Route exact path="http://ec2-100-25-30-18.compute-1.amazonaws.com/about">
      <Redirect to="/about" />
    </Route>

    <Route exact path="/about">
      <About />
    </Route>

  </div>
);

Page.prototypes = {
  isLogged: Prototypes.bool.isrequired,
};

export default Page;
