import { connect } from 'react-redux';
import {  } from 'src/actions/user';
import AllRecipes from 'src/components/AllRecipes';

const mapStateToProps = (state) => ({
  recipes: state.user.recipes,
});

const mapDispatchToProps = (dispatch) => ({
 
});

const ConnectedAllRecipes = connect(mapStateToProps, mapDispatchToProps)(AllRecipes);

export default ConnectedAllRecipes;
