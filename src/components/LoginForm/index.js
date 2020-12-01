import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button } from 'semantic-ui-react';

import './loginForm.scss';

const LoginForm = ({ updateField, logIn }) => (
  <Form>
    <p>Formulaire de login</p>
    <Form.Field>
      <Form.Input fluid className="form__input" label="email" placeholder="Votre email" onChange={() => updateField(event.target.value, 'email')} />
      <Form.Input fluid className="form__input" label="password" placeholder="Votre password" onChange={() => updateField(event.target.value, 'pass')} />
    </Form.Field>
    <Button type="submit" className="button__login" onClick={logIn}>Login</Button>
  </Form>
);

LoginForm.prototype = {
  updateField: PropTypes.func.isrequired,
  logIn: PropTypes.func.isrequired,
};

export default LoginForm;
