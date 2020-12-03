import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './inscriptionForm.scss';

const InscriptionForm = ({ updateField, submitInscription, errorInscription, inscriptionSuccess }) => {
  const inputVeryfication = (event) => {
    event.preventDefault();
    submitInscription();
  };

  return (
    <div className="form__inscription">
      {errorInscription && <div className="error__message">Vous devez remplir tout les champs correctement !</div>}
      {!inscriptionSuccess && <Form>
        <Form.Input label="Votre Email" placeholder="exemple@gmail.com" onChange={() => updateField(event.target.value, 'email')} />
        <Form.Input label="Confirmer votre email" placeholder="exemple@gmail.com" onChange={() => updateField(event.target.value, 'confirmEmail')} />
        <Form.Input label="Votre password" placeholder="Password" type="password" onChange={() => updateField(event.target.value, 'pass')} />
        <Form.Input label="Confirmer votre password" placeholder="confirmation de password" type="password" onChange={() => updateField(event.target.value, 'confirmPass')} />
        <Form.Input label="Votre Pseudo" placeholder="Pseudo" onChange={() => updateField(event.target.value, 'name')} />
        <Button type="submit" className="form__button" onClick={inputVeryfication}>Soumettre</Button>
      </Form>}
      {inscriptionSuccess && <Link to="/home" className="link__inscriptionsuccess">Accédez à votre espace</Link>}
      <Link to="/" className="link__back">Retour</Link>
    </div>
  );
};

InscriptionForm.protoTypes = {
  inscriptionSuccess: PropTypes.bool.isRequired,
  errorInscription: PropTypes.bool.isRequired,
  updateField: PropTypes.func.isRequired,
  submitInscription: PropTypes.func.isRequired,
};

export default InscriptionForm;
