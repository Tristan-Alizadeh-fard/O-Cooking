import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { setSignaledAction, setFavoriteAction, unsetFavoriteAction, addShopListAction, removeShoppingRecipe, shareRecipeAction } from 'src/actions/user';

const mapStateToProps = (state) => ({
  recipe: state.user.recipe,
  isLoading: state.user.isLoading,
  favorite: state.user.userFavorite,
  shoppingList: state.user.shoppingList,
  emailSuccess: state.user.emailSuccess,
});

const mapDispatchToProps = (dispatch) => ({
  setSignaled: (id) => {
    dispatch(setSignaledAction(id));
  },
  setFavorite: (id) => {
    dispatch(setFavoriteAction(id));
  },
  unsetFavorite: (id) => {
    dispatch(unsetFavoriteAction(id));
  },
  addShopList: (id) => {
    dispatch(addShopListAction(id));
  },
  removeShoppingRecipe: (index) => {
    dispatch(removeShoppingRecipe(index));
  },
  shareRecipe: (id) => {
    dispatch(shareRecipeAction(id));
  },
});

const ConnectedRecipe = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default ConnectedRecipe;
