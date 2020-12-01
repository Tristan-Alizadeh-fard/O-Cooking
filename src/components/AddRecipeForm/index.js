import React from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes, { shape } from 'prop-types';

import './addRecipeForm.scss';

const AddRecipeForm = ({
  updateField,
  recipeName,
  preparationTime1,
  preparationTime2,
  cookingTime1,
  cookingTime2,
}) => (
  <Form>
    <p>Formulaire d'ajout recette</p>
    <Form.Field>
      <Form.Input
        fluid label="Donnez un nom à votre recette !"
        placeholder="Ecrivez le nom de votre recette"
        onChange={() => updateField(event.target.value, 'recipeName')}
        value={recipeName}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        placeholder="Ex: 2"
        onChange={() => updateField(event.target.value, 'preparationTime1')}
        value={preparationTime1}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        placeholder="Ex: 30"
        onChange={() => updateField(event.target.value, 'preparationTime2')}
        value={preparationTime2}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        placeholder="Ex: 2"
        onChange={() => updateField(event.target.value, 'cookingTime1')}
        value={cookingTime1}
      />
    </Form.Field>
    <Form.Field>
      <Form.Input
        placeholder="Ex: 30"
        onChange={() => updateField(event.target.value, 'cookingTime2')}
        value={cookingTime2}
      />
    </Form.Field>
  </Form>
);

AddRecipeForm.propTypes = {
  updateField: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  preparationTime1: PropTypes.number.isRequired,
  preparationTime2: PropTypes.number.isRequired,
  cookingTime1: PropTypes.number.isRequired,
  cookingTime2: PropTypes.number.isRequired,
};

export default AddRecipeForm;
