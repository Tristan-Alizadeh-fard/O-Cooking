import { connect } from 'react-redux';

import { showOneRecipe, setisLoading, addShopListAction, setFavoriteAction, unsetFavoriteAction } from 'src/actions/user';

import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  name: state.user.name,
  recipesUser: state.user.recipesUser,
  isLoading: state.user.isLoading,
  favorite: state.user.userFavorite,
});

const mapDispatchToProps = (dispatch) => ({
  showRecipe: (id) => {
    dispatch(showOneRecipe(id));
  },
  setLoader: () => {
    dispatch(setisLoading());
  },
  addShopListAction: (id) => {
    dispatch(addShopListAction(id));
  },
  setFavorite: (id) => {
    dispatch(setFavoriteAction(id));
  },
  unsetFavorite: (id) => {
    dispatch(unsetFavoriteAction(id));
  },
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
