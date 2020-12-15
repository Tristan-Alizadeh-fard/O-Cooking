import { connect } from 'react-redux';
import { showOneRecipe, setisLoading, setFavoriteAction, unsetFavoriteAction, unsetEmailSuccessAction, addShopListAction, removeShoppingRecipe } from 'src/actions/user';
import AllRecipes from 'src/components/AllRecipes';

const mapStateToProps = (state) => ({
  recipes: state.user.recipes,
  isLoading: state.user.isLoading,
  favorite: state.user.userFavorite,
  shoppingList: state.user.shoppingList,
});

const mapDispatchToProps = (dispatch) => ({
  showRecipe: (id) => {
    dispatch(showOneRecipe(id));
  },
  setLoader: () => {
    dispatch(setisLoading());
  },
  setFavorite: (id) => {
    dispatch(setFavoriteAction(id));
  },
  unsetFavorite: (id) => {
    dispatch(unsetFavoriteAction(id));
  },
  unsetEmailSuccess: () => {
    dispatch(unsetEmailSuccessAction());
  },
  addShopList: (id) => {
    dispatch(addShopListAction(id));
  },
  removeShoppingRecipe: (index) => {
    dispatch(removeShoppingRecipe(index));
  },
});

const ConnectedAllRecipes = connect(mapStateToProps, mapDispatchToProps)(AllRecipes);

export default ConnectedAllRecipes;
