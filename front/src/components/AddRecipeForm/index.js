import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Divider,
  Button,
  Icon,
  TextArea,
  Image,
  Dropdown,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import Step from './Step';

import './addRecipeForm.scss';

const AddRecipeForm = ({
  updateRecipeField,
  addToRecipe,
  updateRecipe,
  removeFromRecipe,
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
  steps,
  quantityInputValue,
  selectedMeasure,
  optionsMeasure,
}) => {
  const [IG, setIG] = useState(ingredients);
  return (
    <div className="form__addrecipe">
      <Form>
        <p>Description</p>
        <Form.Field>
          <Form.Input
            fluid label="Donnez un nom à votre recette !"
            placeholder="Ecrivez le nom de votre recette"
            onChange={() => updateRecipeField('recipeName', event.target.value)}
            value={recipeName}
          />
        </Form.Field>

        <Form.Field>
          <Input
            label={{ basic: true, content: 'h' }}
            labelPosition="right"
            placeholder="Ex: 1"
            onChange={() => {
              updateRecipeField('preparationTime1', `${event.target.value}h`);
              updateRecipeField('PTS1', event.target.value);
            }}
            value={PTS1}
          />
          <Input
            label={{ basic: true, content: 'mn' }}
            labelPosition="right"
            placeholder="Ex: 30"
            onChange={() => {
              updateRecipeField('preparationTime2', `${event.target.value}mn`);
              updateRecipeField('PTS2', event.target.value);
            }}
            value={PTS2}
          />
        </Form.Field>

        <Form.Field>
          <Input
            label={{ basic: true, content: 'h' }}
            labelPosition="right"
            placeholder="Ex: 1"
            onChange={() => {
              updateRecipeField('cookingTime', `${event.target.value}h`);
              updateRecipeField('CTS1', event.target.value);
            }}
            value={CTS1}
          />
          <Input
            label={{ basic: true, content: 'mn' }}
            labelPosition="right"
            placeholder="Ex: 30"
            onChange={() => {
              updateRecipeField('cookingTime2', `${event.target.value}mn`);
              updateRecipeField('CTS2', event.target.value);
            }}
            value={CTS2}
          />
        </Form.Field>

        <Divider />

        <p>Ingrédients</p>
        <Form.Field>
          {ingredients.map((ingredient, index) => (
            // eslint-disable-next-line max-len
            <Ingredient {...ingredient} index={index} key={ingredient.name} updateRecipe={updateRecipe} removeFromRecipe={removeFromRecipe} />
          ))}
          <Form.Input
            fluid label="Ajoutez un ingrédient"
            placeholder="ex: Courgette"
            onChange={() => updateRecipeField('ingredientInputValue', event.target.value)}
            value={ingredientInputValue}
          />
          <Input
            label={(
              <Dropdown
                defaultValue={selectedMeasure}
                options={optionsMeasure}
                onChange={() => updateRecipeField('selectedMeasure', event.target.textContent)}
              />
            )}
            type="number"
            labelPosition="right"
            placeholder="Ex: 2"
            onChange={() => updateRecipeField('quantityInputValue', event.target.value)}
            value={quantityInputValue}
            required
          />
          <Button
            type="button"
            onClick={() => addToRecipe('ingredients', {
              name: ingredientInputValue,
              measure: selectedMeasure,
              quantity: quantityInputValue,
            })}
          >
            <Icon name="plus" />
          </Button>
        </Form.Field>

        <Divider />

        <p>Etapes</p>
        <Form.Field>
          {steps.map((step, index) => (
            // eslint-disable-next-line max-len
            <Step {...step} index={index} key={step.content} updateRecipe={updateRecipe} removeFromRecipe={removeFromRecipe} />
          ))}
          <TextArea
            placeholder="ex: Courgette"
            onChange={() => updateRecipeField('stepInputValue', event.target.value)}
            value={stepInputValue}
            rows="3"
          />
          <Button
            type="button"
            onClick={() => addToRecipe('steps', {
              content: stepInputValue,
            })}
          >
            <Icon name="plus" />
          </Button>
        </Form.Field>

        <Divider />
        <p>Image</p>
        <Form.Field>
          <Image src={recipeImage} size="small" wrapped />
          <Button type="button">
            <Icon name="plus" />
          </Button>
        </Form.Field>

        <Divider />
        <p>Catégorie</p>
        <Form.Field>
          <Button.Group size="large">
            <Button type="button" className="category__button">Entrée</Button>
            <Button.Or text="ou" />
            <Button type="button" className="category__button">Plat</Button>
            <Button.Or text="ou" />
            <Button type="button" className="category__button">Dessert</Button>
          </Button.Group>
        </Form.Field>

        <Divider />
        <p>Tag</p>
        <Form.Field>
          {tagList.map((tag) => (
            <Button type="button" className="tag__button" key={tag.key}>{tag.value}</Button>
          ))}
        </Form.Field>
        <Divider />
        <Form.Field>
          <Button type="button" name="add_button" type="button">Ajouter cette recette</Button>
        </Form.Field>
      </Form>
    </div>
  );
};

AddRecipeForm.propTypes = {
  updateRecipeField: PropTypes.func.isRequired,
  addToRecipe: PropTypes.func.isRequired,
  updateRecipe: PropTypes.func.isRequired,
  removeFromRecipe: PropTypes.func.isRequired,
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
