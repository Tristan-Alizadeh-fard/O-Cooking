import React from 'react';
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
import Ingredient from './Ingredient';

import './addRecipeForm.scss';

const AddRecipeForm = ({
  updateField,
  addRecipeIngredients,
  updateRecipeSteps,
  updateRecipeIngredients,
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
}) => (
  <div className="form__addrecipe">
    <Form>
      <p>Description</p>
      <Form.Field>
        <Form.Input
          fluid label="Donnez un nom à votre recette !"
          placeholder="Ecrivez le nom de votre recette"
          onChange={() => updateField(event.target.value, 'recipeName')}
          value={recipeName}
        />
      </Form.Field>

      <Form.Field>
        <Input
          label={{ basic: true, content: 'h' }}
          labelPosition="right"
          placeholder="Ex: 1"
          onChange={() => {
            updateField(`${event.target.value}h`, 'preparationTime1');
            updateField(event.target.value, 'PTS1');
          }}
          value={PTS1}
        />
        <Input
          label={{ basic: true, content: 'mn' }}
          labelPosition="right"
          placeholder="Ex: 30"
          onChange={() => {
            updateField(`${event.target.value}mn`, 'preparationTime2');
            updateField(event.target.value, 'PTS2');
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
            updateField(`${event.target.value}h`, 'cookingTime');
            updateField(event.target.value, 'CTS1');
          }}
          value={CTS1}
        />
        <Input
          label={{ basic: true, content: 'mn' }}
          labelPosition="right"
          placeholder="Ex: 30"
          onChange={() => {
            updateField(`${event.target.value}mn`, 'cookingTime2');
            updateField(event.target.value, 'CTS2');
          }}
          value={CTS2}
        />
      </Form.Field>

      <Divider />

      <p>Ingrédients</p>
      <Form.Field>
        <div>
          {ingredients.map((ingredient, index) => <Ingredient key={index} index={index} ingredient={ingredient} updateIngredients={updateRecipeIngredients} />)}
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
          labelPosition="right"
          placeholder="Ex: 2"
          onChange={() => updateField(event.target.value, 'quantityInputValue')}
          value={quantityInputValue}
          required
        />
        <Button
          onClick={() => addRecipeIngredients({
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
        <TextArea
          placeholder="ex: Courgette"
          onChange={() => updateField(event.target.value, 'stepInputValue')}
          value={stepInputValue}
          rows="3"
        />
        <Button onClick={() => updateRecipeSteps(stepInputValue)}>
          <Icon name="plus" />
        </Button>
      </Form.Field>

      <Divider />
      <p>Image</p>
      <Form.Field>
        <Image src={recipeImage} size="small" wrapped />
        <Button>
          <Icon name="plus" />
        </Button>
      </Form.Field>

      <Divider />
      <p>Catégorie</p>
      <Form.Field>
        <Button.Group size="large">
          <Button className="category__button">Entrée</Button>
          <Button.Or text="ou" />
          <Button className="category__button">Plat</Button>
          <Button.Or text="ou" />
          <Button className="category__button">Dessert</Button>
        </Button.Group>
      </Form.Field>

      <Divider />
      <p>Tag</p>
      <Form.Field>
        {tagList.map((tag) => (
          <Button className="tag__button" key={tag.key}>{tag.value}</Button>
        ))}
      </Form.Field>
      <Divider />
      <Form.Field>
        <Button name="add_button" type="button" onClick={console.log('Ici')}>Ajouter cette recette</Button>
      </Form.Field>
    </Form>
  </div>
);

AddRecipeForm.propTypes = {
  updateField: PropTypes.func.isRequired,
  addRecipeIngredients: PropTypes.func.isRequired,
  updateRecipeSteps: PropTypes.func.isRequired,
  updateRecipeIngredients: PropTypes.func.isRequired,
  recipeName: PropTypes.string.isRequired,
  preparationTime1: PropTypes.string.isRequired,
  preparationTime2: PropTypes.string.isRequired,
  cookingTime1: PropTypes.string.isRequired,
  cookingTime2: PropTypes.string.isRequired,
  ingredientInputValue: PropTypes.string.isRequired,
  stepInputValue: PropTypes.string.isRequired,
  recipeImage: PropTypes.string.isRequired,
  quantityInputValue: PropTypes.string.isRequired,
};

export default AddRecipeForm;