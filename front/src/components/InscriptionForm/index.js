import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import './inscriptionForm.scss';

const InscriptionForm = ({ updateField, submitInscription, errorInscription, inscriptionSuccess, emailInUse }) => {
  const inputVeryfication = (event) => {
    event.preventDefault();
    submitInscription();
  };

  return (
    <div className="form__inscription">
      {errorInscription && <div className="error__message">Vous devez remplir tout les champs correctement !</div>}
      {inscriptionSuccess && <h2>Inscription OK ! Vous pouver maintenant accéder à votre espace</h2>}
      {!inscriptionSuccess && <Form>
        <Form.Input type="email" label="Votre Email" placeholder="exemple@gmail.com" onChange={() => updateField(event.target.value, 'email')} />
        {emailInUse && <p className="emailinuse">Email déjà utilisé ou Email invalide, veuillez utiliser une autre adresse</p>}
        <Form.Input type="email" label="Confirmer votre email" placeholder="exemple@gmail.com" onChange={() => updateField(event.target.value, 'confirmEmail')} />
        <Form.Input label="Votre password" placeholder="Password" type="password" onChange={() => updateField(event.target.value, 'pass')} />
        <Form.Input label="Confirmer votre password" placeholder="Confirmation de password" type="password" onChange={() => updateField(event.target.value, 'confirmPass')} />
        <Form.Input label="Votre Pseudo" placeholder="Pseudo Minimum 4 caractères" onChange={() => updateField(event.target.value, 'name')} />
        <Button type="submit" className="form__button" onClick={inputVeryfication}>Soumettre</Button>
      </Form>}
      {inscriptionSuccess && <Link to="/home" className="link__inscriptionok">Accéder à votre espace</Link>}
      <Link to="/" className="link__back">Retour</Link>
    </div>
  );
};

InscriptionForm.protoTypes = {
  emailInUse: PropTypes.bool.isRequired,
  inscriptionSuccess: PropTypes.bool.isRequired,
  errorInscription: PropTypes.bool.isRequired,
  updateField: PropTypes.func.isRequired,
  submitInscription: PropTypes.func.isRequired,
};

export default InscriptionForm;
