import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import {  } from 'src/actions/user';

const mapStateToProps = (state) => ({
  recipe: state.user.recipe,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({

});

const ConnectedRecipe = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default ConnectedRecipe;
