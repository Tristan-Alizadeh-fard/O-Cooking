import { createReducer } from '@reduxjs/toolkit';

import {
  updateRecipeField,
  addToRecipe,
  removeFromRecipe,
  updateRecipe,
  selectCategory,
  selectTags,
  changeImage,
  emptyForm,
  submitRecipe,
  setFormSettings,
  setMeasures,
  setTags,
} from 'src/actions/recipe';
import { sendMessage } from '../actions/recipe';

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
  selectedMeasure: 'g',
  ingredients: [],
  stepInputValue: '',
  steps: [],
  recipeImage: '',
  categories: [],
  selectedCategory: '',
  tagList: [],
  selectedTags: [],
  settings: [],
  success: false,
  error: false,
  open: true,
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
    .addCase(setTags, (state, action) => {
      state.tagList = action.payload.value;
    })
    .addCase(setFormSettings, (state, action) => {
      state.categories = action.payload.value;
    })
    .addCase(setMeasures, (state, action) => {
      state.optionsMeasure = action.payload.value;
    })
    .addCase(submitRecipe, () => {
    })
    .addCase(emptyForm, (state) => {
      state.ingredients = [];
      state.steps = [];
      state.selectedTags = [];
      state.recipeName = '';
      state.PTS1 = '';
      state.PTS2 = '';
      state.CTS1 = '';
      state.CTS2 = '';
      state.nbPerson = '';
      state.selectedMeasure = 'g';
      state.ingredientInputValue = '';
      state.quantityInputValue = '';
      state.stepInputValue = '';
      state.selectedCategory = '';
      state.recipeImage = '';
      state.success = false;
      state.error = false;
    })
    .addCase(sendMessage, (state, action) => {
      state[action.payload.target] = action.payload.value;
    });
});

export default recipe;
