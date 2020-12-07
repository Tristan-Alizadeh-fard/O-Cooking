import { createAction } from '@reduxjs/toolkit';

export const updateRecipeField = createAction('recipe/field/update', (target, value) => ({
  payload: {
    target,
    value,
  },
}));

export const addToRecipe = createAction('recipe/add', (target, value) => ({
  payload: {
    target,
    value,
  },
}));

export const updateRecipe = createAction('recipe/update', (target, index, value) => ({
  payload: {
    target,
    index,
    value,
  },
}));

export const removeFromRecipe = createAction('recipe/remove', (target, index) => ({
  payload: {
    target,
    index,
  },
}));

export const selectCategory = createAction('recipe/selectCategory', (value) => ({
  payload: {
    value,
  },
}));

export const selectTags = createAction('recipe/selectTags', (value) => ({
  payload: {
    value,
  },
}));
