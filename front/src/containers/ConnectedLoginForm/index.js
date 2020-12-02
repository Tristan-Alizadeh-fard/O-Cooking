import { connect } from 'react-redux';
import { updateUserField, logInUser, descriptionOn } from 'src/actions/user';
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
});

const ConnectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default ConnectedLoginForm;
