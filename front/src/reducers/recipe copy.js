import {
  TEST_RECIPE_ALL,
  UPDATE_RECIPE_FIELD,
  ADD_RECIPE_INGREDIENTS,
  UPDATE_RECIPE_STEPS,
  UPDATE_RECIPE_INGREDIENTS,
  DELETE_RECIPE_INGREDIENTS,
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

// fonctions qui remove / update un item d'un array (source: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#inserting-and-removing-items-in-arrays )
function removeItem(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
}
var deleteUpdate;

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item,
    };
  });
}

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
    case ADD_RECIPE_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.value],
        ingredientInputValue: '',
        quantityInputValue: '',
      };
    case UPDATE_RECIPE_STEPS:
      return {
        ...state,
        steps: [...state.steps, action.value],
        stepsInputValue: '',
      };
    case UPDATE_RECIPE_INGREDIENTS:
      // eslint-disable-next-line max-len
      // Ici action.value renvoie un obj {name :{name:'courgettes', measure:'g', quantity:'Kg',}, measure: undefined, quantity; undefined,}; à chercher pourquoi
      // WIP
      console.log('update ingredient at index =>', action.index, 'with =>', action.value);
      return {
        ...state,
      };
    case DELETE_RECIPE_INGREDIENTS:
      console.log(action);
      console.log(removeItem(state.ingredients, action.index));
      // https://stackoverflow.com/questions/61697165/using-splice-in-reducer-redux
      // il me faut un index
      deleteUpdate = removeItem(state.ingredients, action.index);
      return {
        ...state,
        ingredients: deleteUpdate,
      };
    default: return { ...state };
  }
};

export default recipe;
