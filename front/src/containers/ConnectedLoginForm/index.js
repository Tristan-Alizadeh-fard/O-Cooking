import { connect } from 'react-redux';
import { updateUserField, logInUser, descriptionOn, allRecipes, logOutUser, setisLoading, getUserRecipesAction, setErrorInscriptionAction } from 'src/actions/user';
import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({
  errorLogin: state.user.errorLogin,
  isLogged: state.user.isLogged,
  descriptionOn: state.user.descriptionOn,
  email: state.user.email,
  pass: state.user.pass,
  recipesUser: state.user.recipesUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
  logIn: () => {
    dispatch(logInUser());
  },
  showDescription: () => {
    dispatch(descriptionOn());
  },
  getAllrecipes: () => {
    dispatch(allRecipes());
  },
  logOut: () => {
    dispatch(logOutUser());
  },
  setLoader: () => {
    dispatch(setisLoading());
  },
  getUserRecipes: () => {
    dispatch(getUserRecipesAction());
  },
  setErrorInscription: () => {
    dispatch(setErrorInscriptionAction());
  },
});

const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default ConnectedLoginForm;
