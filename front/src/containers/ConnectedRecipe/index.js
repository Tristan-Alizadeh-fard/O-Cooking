import { connect } from 'react-redux';
import {  } from 'src/actions/user';
import Recipe from 'src/components/Recipe';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
 
});

const ConnectedRecipe = connect(mapStateToProps, mapDispatchToProps)(Recipe);

export default ConnectedRecipe;
