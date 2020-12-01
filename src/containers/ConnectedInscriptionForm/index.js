import { connect } from 'react-redux';
import InscriptionForm from 'src/components/InscriptionForm';
import { updateUserField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  emailValue: state.emailValue,
  passwordValue: state.passwordValue,
  pseudoValue: state.pseudoValue,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
});

const ConnectedInscriptionForm = connect(mapStateToProps, mapDispatchToProps)(InscriptionForm);

export default ConnectedInscriptionForm;
