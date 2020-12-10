import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { setSignaledAction, setFavoriteAction, unsetFavoriteAction, addShopListAction } from 'src/actions/user';

const mapStateToProps = (state) => ({
  recipe: state.user.recipe,
  isLoading: state.user.isLoading,
  favorite: state.user.userFavorite,
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
});

const ConnectedRecipe = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default ConnectedRecipe;
