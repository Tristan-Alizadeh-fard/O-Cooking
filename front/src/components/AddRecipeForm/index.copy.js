import React, { useState, useEffect } from 'react';
import {
  Form,
  Select,
  Input,
  Divider,
  Button,
  Icon,
  TextArea,
  Image,
  Option,
  Dropdown,
} from 'semantic-ui-react';
import PropTypes, { shape } from 'prop-types';

import './addRecipeForm.scss';

const getNewList = (arr, index) => {
  arr.splice(index, 1);
  console.log('getNewList', arr);
  return arr;
};

const AddRecipeForm = ({
  updateField,
  addRecipeIngredients,
  updateRecipeIngredients,
  deleteRecipeIngredients,
  updateRecipeSteps,
  recipeName,
  preparationTime1,
  preparationTime2,
  PTS1,
  PTS2,
  cookingTime1,
  cookingTime2,
  CTS1,
  CTS2,
  ingredientInputValue,
  stepInputValue,
  recipeImage,
  tagList,
  ingredients,
  quantityInputValue,
  selectedMeasure,
  optionsMeasure,
}) => {
  console.log('Start ingredients =', ingredients);
  const [IGS, setIGS] = useState(ingredients);



  useEffect(() => {
    console.log('useEffect, IGS',IGS, 'comparer à ingredients', ingredients);
  }, [ingredients]);

  return (
    <div>
    <p>Ingrédients</p>
        <Form.Field>
          <div>
            {
              ingredients.map((ingredient, index) => (
                <div className="ingredient" key={`${ingredient.quantity} ${ingredient.measure}`}>
                  <p>{ingredient.quantity} {ingredient.measure} de {ingredient.name}</p>
                  <div className="ingredient__icons">
                    <Button
                      type="button"
                      onClick={() => updateRecipeIngredients(index, ingredient)}
                    >
                      <Icon name="pencil" color="blue" />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => deleteRecipeIngredients(getNewList(IGS, index))}
                    >
                      <Icon name="delete" color="red" />
                    </Button>
                    <Button
                      type="button"
                      onClick={() => console.log('gné')}
                    >
                      Log list
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>
          <Form.Input
            fluid label="Ajoutez un ingrédient"
            placeholder="ex: Courgette"
            onChange={() => updateField(event.target.value, 'ingredientInputValue')}
            value={ingredientInputValue}
          />
          <Input
            label={(
              <Dropdown
                defaultValue={selectedMeasure}
                options={optionsMeasure}
                onChange={() => updateField(event.target.textContent, 'selectedMeasure')}
              />
            )}
            type="number"
            labelPosition="right"
            placeholder="Ex: 2"
            onChange={() => updateField(event.target.value, 'quantityInputValue')}
            value={quantityInputValue}
            required
          />
          <Button
            type="button"
            onClick={() => addRecipeIngredients({
              name: ingredientInputValue,
              measure: selectedMeasure,
              quantity: quantityInputValue,
            })}
          >
            <Icon name="plus" />
          </Button>
        </Form.Field>
    </div>
  );
};

AddRecipeForm.propTypes = {
  updateField: PropTypes.func.isRequired,
  addRecipeIngredients: PropTypes.func.isRequired,
  updateRecipeSteps: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  preparationTime1: PropTypes.string.isRequired,
  preparationTime2: PropTypes.string.isRequired,
  cookingTime1: PropTypes.string.isRequired,
  cookingTime2: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  ingredientInputValue: PropTypes.string.isRequired,
  stepInputValue: PropTypes.string.isRequired,
  recipeImage: PropTypes.string.isRequired,
  quantityInputValue: PropTypes.string.isRequired,
};

export default AddRecipeForm;
