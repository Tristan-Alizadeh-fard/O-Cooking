import { createReducer } from '@reduxjs/toolkit';

import {
  updateRecipeField,
  addToRecipe,
  removeFromRecipe,
  updateRecipe,
  selectCategory,
  selectTags,
  changeImage,
} from 'src/actions/recipe';
import { submitRecipe, setFormSettings, setMeasures } from '../actions/recipe';

const initialState = {
  recipeName: '',
  preparationTime1: '00h',
  preparationTime2: '00mn',
  PTS1: '',
  PTS2: '',
  cookingTime1: '00h',
  cookingTime2: '00mn',
  CTS1: '',
  CTS2: '',
  nbPerson: '',
  ingredientInputValue: '',
  quantityInputValue: '',
  optionsMeasure: [
    { key: 1, text: 'g', value: 'g' },
    { key: 2, text: 'Kg', value: 'Kg' },
    { key: 3, text: 'c.a.s', value: 'c.a.s' },
    { key: 4, text: 'c.a.c', value: 'c.a.c' },
    { key: 5, text: 'pièce.s', value: 'pièce.s' },
    { key: 6, text: 'pincée.s', value: 'pincée.s' },
    { key: 7, text: 'ml', value: 'ml' },
    { key: 8, text: 'cl', value: 'cl' },
    { key: 9, text: 'L', value: 'L' },
  ],
  selectedMeasure: 'g',
  ingredients: [],
  stepInputValue: '',
  steps: [],
  recipeImage: '',
  alertSize: false,
  categories: [],
  selectedCategory: '',
  tagList: [
    { key: 1, value: 'Sans gluten' },
    { key: 2, value: 'Froid' },
    { key: 3, value: 'Chaud' },
    { key: 4, value: 'Vegan' },
    { key: 5, value: 'Épicé' },
    { key: 6, value: 'Végétarien' },
    { key: 7, value: 'Viande' },
  ],
  selectedTags: [],
  settings: [],
};

const recipe = createReducer(initialState, (builder) => {
  builder
    .addCase(updateRecipeField, (state, action) => {
      state[action.payload.target] = action.payload.value;
    })
    .addCase(addToRecipe, (state, action) => {
      state[action.payload.target].push(action.payload.value);
      state.ingredientInputValue = '';
      state.quantityInputValue = '';
      state.stepInputValue = '';
    })
    .addCase(updateRecipe, (state, action) => {
      state[action.payload.target][action.payload.index] = action.payload.value;
    })
    .addCase(removeFromRecipe, (state, action) => {
      state[action.payload.target].splice(action.payload.index, 1);
    })
    .addCase(changeImage, (state, action) => {
      state.recipeImage = action.payload.value;
    })
    .addCase(selectCategory, (state, action) => {
      state.selectedCategory = action.payload.value;
    })
    .addCase(selectTags, (state, action) => {
      if (state.selectedTags.includes(action.payload.value)) {
        const idx = state.selectedTags.indexOf(action.payload.value);
        state.selectedTags.splice(idx, 1);
      }
      else {
        state.selectedTags.push(action.payload.value);
      }
    })
    .addCase(setFormSettings, (state, action) => {
      state.categories = action.payload.value;
    })
    .addCase(setMeasures, (state, action) => {
      state.optionsMeasure = action.payload.value;
    })
    .addCase(submitRecipe, (state, action) => {
    });
});

export default recipe;
