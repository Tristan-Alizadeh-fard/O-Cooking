import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { setAllLoaders } from 'src/actions/user';

const mapStateToProps = (state) => ({
  recipe: state.user.recipe,
  isLoadingOneRecipe: state.user.isLoadingOneRecipe,
});

const mapDispatchToProps = (dispatch) => ({
  setLoaders: () => {
    dispatch(setAllLoaders());
  },
});

const ConnectedRecipe = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default ConnectedRecipe;
