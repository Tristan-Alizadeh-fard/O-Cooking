import { connect } from 'react-redux';
import InscriptionForm from 'src/components/InscriptionForm';
import { updateUserField, userInscription } from 'src/actions/user';

const mapStateToProps = (state) => ({
  errorInscription: state.user.errorInscription,
  inscriptionSuccess: state.user.inscriptionSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
  submitInscription: () => {
    dispatch(userInscription());
  },
});

const ConnectedInscriptionForm = connect(mapStateToProps, mapDispatchToProps)(InscriptionForm);

export default ConnectedInscriptionForm;
