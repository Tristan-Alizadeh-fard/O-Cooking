import { createAction, createReducer } from '@reduxjs/toolkit';

import {
  updateRecipeField,
  addToRecipe,
  removeFromRecipe,
  updateRecipe,
} from 'src/actions/recipe';

const initialState = {
  recipeName: '',
  preparationTime1: '',
  preparationTime2: '',
  PTS1: '',
  PTS2: '',
  cookingTime1: '',
  cookingTime2: '',
  CTS1: '',
  CTS2: '',
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
  recipeImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAM1BMVEX///+hoaGdnZ309PTNzc3Hx8ft7e2qqqrd3d2np6ekpKT6+vr39/fS0tLCwsLl5eW3t7c4Jjh3AAACf0lEQVR4nO3b646qMBRAYVouhcrt/Z/2jCJXS1HbxOye9f2dGRJWcNt2NMsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIHlVXPmv7+cLvbIxqWb49R19LFeR6fLXt/Sx3Cpl4rFCGzRVm0fSllpog4hjrKABDTIa3ElvUBXj2NdhlxPeoLP6bgx6KmQ36PRzjTPeAi4nukFll4VeF3A50Q3mx+BPyIMgukG/NrABE4EGwhsUawPzv74Wqnc3v/5DEtENlheD9i4bb721fXv+c9kNbr2+V9DGew50L+VbQchukGX12DSm8D7q0zuo5zalN8iyNvePw2FeSJ3uKuQ3uNCa+c2jqU5+JfkG6xridCSk3mCznFa6cP9O4g3WXZVnJKTd4DbqXQPj/Ku0G5T7BCcjIekG9es/lFznDCk3qJqXBso6VpQJNWjr/f0dh8HpSEinQWUOZ6uFK4HS/cvlkmmQm8fOaN0evg6Ds5GQTIP+sDPKzUkDpY4jIZUGy3pwXgY5h8H0IJjDWUIiDZbN4bwzcg8D90hIo8G6OXwug4bzAtuHZZJGg367MyqfA9LD7rbRSTSo93dc75o4Xw3jdiSk0OCwOVSm9BdQh5O1BBq414NXNiMhgQbHzeF7Nidr8hvUXyXYbqPFN3BtDt+LsJysSW/w3TCYzGtm6Q1868ErZrmG6AYX60G/ec0su8HVevAqwjQSZDcIGAYP08ma6AZdYILnSJDcIGgYTB4jQXCDv2EQQSe6QVXHMAhu4PlszaekNrBlEc0o8rs892kWj8jvdLVNxAIPIR93/pGhjKsL+dg7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIjwDyTJIzVThuZxAAAAAElFTkSuQmCC',
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
};

const recipe = createReducer(initialState, (builder) => {
  builder
    .addCase(updateRecipeField, (state, action) => {
      state[action.payload.target] = action.payload.value;
    })
    .addCase(addToRecipe, (state, action) => {
      console.log(action.payload);
      state[action.payload.target].push(action.payload.value);
      state.ingredientInputValue = '';
      state.quantityInputValue = '';
    })
    .addCase(updateRecipe, (state, action) => {
      state[action.payload.target][action.payload.index] = action.payload.value;
    })
    .addCase(removeFromRecipe, (state, action) => {
      console.log(action.payload.target, action.payload.index);
      state[action.payload.target] = state[action.payload.target].splice(action.payload.index, 0);
    });
});

export default recipe;
