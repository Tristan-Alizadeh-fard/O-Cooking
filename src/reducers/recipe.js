import {
  TEST_RECIPE_ALL,
  UPDATE_RECIPE_FIELD,
  UPDATE_RECIPE_INGREDIENTS,
  UPDATE_RECIPE_STEPS,
} from 'src/actions/recipe';

const initialState = {
  recipeValue: '',
  preparationTime1: '',
  preparationTime2: '',
  cookingTime1: '',
  cookingTime2: '',
  ingredientInputValue: '',
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

const recipe = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST_RECIPE_ALL:
      return {
        ...state,
      };
    case UPDATE_RECIPE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case UPDATE_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.value],
        ingredientInputValue: '',
      };
    case UPDATE_RECIPE_STEPS:
      return {
        ...state,
        steps: [...state.steps, action.value],
        stepsInputValue: '',
      };
    default: return { ...state };
  }
};

export default recipe;
