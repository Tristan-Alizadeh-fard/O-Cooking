import { connect } from 'react-redux';
import { updateUserField, logInUser, descriptionOn, allRecipes, logOutUser } from 'src/actions/user';
import LoginForm from 'src/components/LoginForm';

const mapStateToProps = (state) => ({
  errorLogin: state.user.errorLogin,
  isLogged: state.user.isLogged,
  descriptionOn: state.user.descriptionOn,
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
});

const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default ConnectedLoginForm;
