import React from 'react';
import { Button, Form } from 'semantic-ui-react';

import './inscriptionForm.scss';

const InscriptionForm = () => (
  <div className="form__inscription">
    <Form>
      <Form.Input label="Votre Email" placeholder="exemple@gmail.com" />
      <Form.Input label="Confirmer votre email" placeholder="exemple@gmail.com" />
      <Form.Input label="Votre password" placeholder="Password" />
      <Form.Input label="Confirmer votre password" placeholder="confirmation de password" />
      <Form.Input label="Votre Pseudo" placeholder="Pseudo" />
      <Button type="submit">Soumettre</Button>
    </Form>
  </div>
);

export default InscriptionForm;
