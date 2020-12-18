import { connect } from 'react-redux';

import { showOneRecipe, setisLoading, setFavoriteAction, unsetFavoriteAction, addShopListAction, removeShoppingRecipe, unsetEmailSuccessAction } from 'src/actions/user';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  name: state.user.name,
  recipesUser: state.user.recipesUser,
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
  addShopList: (id) => {
    dispatch(addShopListAction(id));
  },
  removeShoppingRecipe: (index) => {
    dispatch(removeShoppingRecipe(index));
  },
  unsetEmailSuccess: () => {
    dispatch(unsetEmailSuccessAction());
  },
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
