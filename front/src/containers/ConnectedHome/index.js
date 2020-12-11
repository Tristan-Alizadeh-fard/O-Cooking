import { connect } from 'react-redux';
import { showOneRecipe, setisLoading, addShopListAction } from 'src/actions/user';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  name: state.user.name,
  recipesUser: state.user.recipesUser,
  isLoading: state.user.isLoading,
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
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
