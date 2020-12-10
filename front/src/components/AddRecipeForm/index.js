import React from 'react';
import './addRecipeForm.scss';
import {
  Form,
  Input,
  Divider,
  Button,
  Icon,
  TextArea,
  Image,
  Dropdown,
  Message,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Ingredient from './Ingredient';
import Step from './Step';
import Category from './Category';
import Tag from './Tag';


const AddRecipeForm = ({
  updateRecipeField,
  addToRecipe,
  updateRecipe,
  removeFromRecipe,
  selectTags,
  selectCategory,
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
  quantityInputValue,
  optionsMeasure,
  selectedMeasure,
  ingredients,
  stepInputValue,
  steps,
  recipeImage,
  alertSize,
  changeImage,
  tagList,
  selectedTags,
  categories,
  selectedCategory,
  submitRecipe,
}) => {
  const prevent = true;
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
          <p>Entrez votre temsp de préparation</p>
          <Input
            label={{ basic: true, content: 'h' }}
            type="number"
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
            type="number"
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
          <p>Puis votre temps de cuisson si besoin</p>
          <Input
            label={{ basic: true, content: 'h' }}
            type="number"
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
            type="number"
            labelPosition="right"
            placeholder="Ex: 30"
            onChange={() => {
              updateRecipeField('cookingTime2', `${event.target.value}mn`);
              updateRecipeField('CTS2', event.target.value);
            }}
            value={CTS2}
          />
        </Form.Field>

        <Form.Field>
          <p>Le nombre de personnes</p>
          <Input
            placeholder="Ex: 4"
            type="number"
            onChange={() => updateRecipeField('nbPerson', event.target.value)}
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
            <Step {...step} index={index} key={step.description} updateRecipe={updateRecipe} removeFromRecipe={removeFromRecipe} />
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
              description: stepInputValue,
            })}
          >
            <Icon name="plus" />
          </Button>
        </Form.Field>

        <Divider />
        <p>Image</p>
        <Form.Field>
          <Image src={recipeImage} size="small" wrapped />
          <Input type="file" accept="image/gif, image/jpeg, image/png, image/jpg" onChange={() => changeImage(URL.createObjectURL(event.target.files[0]))} />
        </Form.Field>
        {alertSize && <p className="alert">Votre image est trop lourde. La taille limite est de 5Mo.</p>}
        <Divider />
        <p>Catégorie</p>
        <Form.Field>
          <Button.Group size="large">
            {categories.map((category) => (
            // eslint-disable-next-line max-len
              <Category {...category} key={category.key} selectedCategory={selectedCategory} selectCategory={selectCategory} />
            ))}
          </Button.Group>
        </Form.Field>

        <Divider />
        <p>Tag</p>
        <Form.Field>
          <div className="tags">
            {tagList.map((tag) => (
              // eslint-disable-next-line max-len
              <Tag {...tag} key={tag.key} selectedTags={selectedTags} selectTags={selectTags} tagList={tagList} />
            ))}
          </div>
        </Form.Field>
        <Divider />
        <Form.Field>
          <Button
            type="button"
            name="add_button"
            onClick={() => submitRecipe()}
          >Ajouter cette recette
          </Button>
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
  alertSize: PropTypes.bool.isRequired,
  quantityInputValue: PropTypes.string.isRequired,
  submitRecipe: PropTypes.func.isRequired,
};

export default AddRecipeForm;
