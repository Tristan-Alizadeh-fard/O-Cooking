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
  TransitionGroup,
  FormField,
} from 'semantic-ui-react';
import Ingredient from './Ingredient';
import PropTypes, { shape } from 'prop-types';

import './addRecipeForm.scss';

const optionsTime = [
  { key: 'h', text: 'h', value: 'h' },
  { key: 'mn', text: 'mn', value: 'mn' },
];

const optionsQuantity = [
  { key: 'g', text: 'g', value: 'g'},
  { key: 'Kg', text: 'Kg', value: 'Kg'},
  { key: 'c.a.s', text: 'c.a.s', value: 'c.a.s'},
  { key: 'c.a.c', text: 'c.a.c', value: 'c.a.c'},
  { key: 'pièce.s', text: 'pièce.s', value: 'pièce.s'},
  { key: 'pincée.s', text: 'pincée.s', value: 'pincée.s'},
  { key: 'ml', text: 'ml', value: 'ml'},
  { key: 'cl', text: 'cl', value: 'cl'},
  { key: 'L', text: 'L', value: 'L'},
];

const AddRecipeForm = ({
  updateField,
  updateRecipeIngredients,
  updateRecipeSteps,
  recipeValue,
  preparationTime1,
  preparationTime2,
  cookingTime1,
  cookingTime2,
  ingredientInputValue,
  stepInputValue,
  recipeImage,
  tagList,
  ingredients,
}) => (
  <div className="form__addrecipe">
    <Form>
      <p>Description</p>
      <Form.Field>
        <Form.Input
          fluid label="Donnez un nom à votre recette !"
          placeholder="Ecrivez le nom de votre recette"
          onChange={() => updateField(event.target.value, 'recipeValue')}
          value={recipeValue}
        />
      </Form.Field>

      <Form.Field>
        <Input
          placeholder="Ex: 2"
          onChange={() => updateField(event.target.value, 'preparationTime1')}
          value={preparationTime1}
        />
        <Select compact options={optionsTime} defaultValue="h" />

        <Input
          placeholder="Ex: 30 (si nécessaire)"
          onChange={() => updateField(event.target.value, 'preparationTime2')}
          value={preparationTime2}
        />
        <Select compact options={optionsTime} defaultValue="mn" />
      </Form.Field>

      <Form.Field>
        <Input
          placeholder="Ex: 2"
          onChange={() => updateField(event.target.value, 'cookingTime1')}
          value={cookingTime1}
        />
        <Select compact options={optionsTime} defaultValue="h" />

        <Input
          placeholder="Ex: 30 (si nécessaire)"
          onChange={() => updateField(event.target.value, 'cookingTime2')}
          value={cookingTime2}
        />
        <Select compact options={optionsTime} defaultValue="mn" />
      </Form.Field>

      <Divider />

      <p>Ingrédients</p>
      <Form.Field>
        <div>
          {ingredients.map((ingredient) => <Ingredient ingredient={ingredient} />)}
        </div>
        <Form.Input
          fluid label="Ajoutez un ingrédient"
          placeholder="ex: Courgette"
          onChange={() => updateField(event.target.value, 'ingredientInputValue')}
          value={ingredientInputValue}
        />
        <Select compact options={optionsQuantity} defaultValue="g" />
        <Button onClick={() => updateRecipeIngredients(ingredientInputValue)}>
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
        <Button as="button" onClick={console.log('Ici')}>Ajouter cette recette</Button>
      </Form.Field>
    </Form>
  </div>
);

AddRecipeForm.propTypes = {
  updateField: PropTypes.func.isRequired,
  updateRecipeIngredients: PropTypes.func.isRequired,
  updateRecipeSteps: PropTypes.func.isRequired,
  recipeValue: PropTypes.string.isRequired,
  preparationTime1: PropTypes.string.isRequired,
  preparationTime2: PropTypes.string.isRequired,
  cookingTime1: PropTypes.string.isRequired,
  cookingTime2: PropTypes.string.isRequired,
  ingredientInputValue: PropTypes.string.isRequired,
  stepInputValue: PropTypes.string.isRequired,
  recipeImage: PropTypes.string.isRequired,
};

export default AddRecipeForm;
