import { connect } from 'react-redux';
import Navbar from 'src/components/Navbar';
import { logOutUser, allRecipes, getUserRecipesAction, setisLoading } from 'src/actions/user';
import { getFormSettings } from 'src/actions/recipe';

const mapStateToProps = (state) => ({
  admin: state.user.admin,
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
  getFormSettings: () => {
    dispatch(getFormSettings());
  },
});

const ConnectedNavbar = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default ConnectedNavbar;
