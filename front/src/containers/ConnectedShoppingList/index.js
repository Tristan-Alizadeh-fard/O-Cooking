import { connect } from 'react-redux';
import { removeFromList, removeShoppingRecipe } from 'src/actions/user';
import ShoppingList from 'src/components/ShoppingList';

const mapStateToProps = (state) => ({
  shoppingList: state.user.shoppingList,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromList: (index) => {
    dispatch(removeFromList(index));
  },
  removeShoppingRecipe: (index) => {
    dispatch(removeShoppingRecipe(index));
  },
});

const ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

export default ConnectedShoppingList;
