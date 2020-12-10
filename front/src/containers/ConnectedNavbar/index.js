import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';
import { logOutUser, allRecipes, getUserRecipesAction, setisLoading, getShopListAction } from 'src/actions/user';

const mapStateToProps = (state) => ({
  admin: state.user.roleUser,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => {
    dispatch(logOutUser());
  },
  getAllrecipes: () => {
    dispatch(allRecipes());
  },
  getUserRecipes: () => {
    dispatch(getUserRecipesAction());
  },
  setLoader: () => {
    dispatch(setisLoading());
  },
  getShopList: () => {
    dispatch(getShopListAction());
  },
});

const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default ConnectedNavbar;
