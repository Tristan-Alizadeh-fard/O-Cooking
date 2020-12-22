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

export const changeImage = createAction('recipe/changeImage', (value) => ({
  payload: {
    value,
  },
}));

export const submitRecipe = createAction('recipe/submit');

export const getFormSettings = createAction('recipe/getFormSettings');

export const setFormSettings = createAction('recipe/setFormSettings', (value) => ({
  payload: {
    value,
  },
}));

export const setTags = createAction('recipe/setTags', (value) => ({
  payload: {
    value,
  },
}));

export const setMeasures = createAction('recipe/setMeasures', (value) => ({
  payload: {
    value,
  },
}));

export const emptyForm = createAction('recipe/empty');

export const sendMessage = createAction('recipe/submit/sendMessage', (target, value) => ({
  payload: {
    target,
    value,
  },
}));
