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
    <div className="all__page inscription_form">
      <div className="form__inscription_home">
        {errorInscription && <div className="error__message">Vous devez remplir tout les champs correctement !</div>}
        {inscriptionSuccess && <h3>Inscription OK ! Veuillez vous connecter pour commencer</h3>}
        {!inscriptionSuccess && <Form>
          <Form.Input type="email" label="Votre Email" placeholder="exemple@gmail.com" className="email" onChange={() => updateField(event.target.value, 'email')} />
          {emailInUse && <p className="emailinuse">Email déjà utilisé ou Email invalide, veuillez utiliser une autre adresse</p>}
          <Form.Input type="email" label="Confirmer votre email" placeholder="exemple@gmail.com" className="email" onChange={() => updateField(event.target.value, 'confirmEmail')} />
          <Form.Input label="Votre password" placeholder="Password" type="password" className="password" onChange={() => updateField(event.target.value, 'pass')} />
          <Form.Input label="Confirmer votre password" placeholder="Confirmation de password" type="password" className="password" onChange={() => updateField(event.target.value, 'confirmPass')} />
          <Form.Input label="Votre Pseudo" placeholder="Pseudo Minimum 4 caractères" className="pseudo" onChange={() => updateField(event.target.value, 'name')} />
          <Button type="submit" className="form__button_valide" onClick={inputVeryfication}>Envoyer</Button>
        <Link to="/" className="link__backinscription">Retour</Link>
        </Form>}
         {inscriptionSuccess && <Link to="/" className="link__back" onClick={() => updateField(false, 'inscriptionSuccess')}>- Connection -</Link>}
      </div>
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
