import { connect } from 'react-redux';
import { removeFromList, removeShoppingRecipe, sendShoppingListAction } from 'src/actions/user';
import ShoppingList from 'src/components/ShoppingList';

const mapStateToProps = (state) => ({
  shoppingList: state.user.shoppingList,
  shoppingListCheck: state.user.shoppingListCheck,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromList: (index) => {
    dispatch(removeFromList(index));
  },
  removeShoppingRecipe: (index) => {
    dispatch(removeShoppingRecipe(index));
  },
  sendShoppingList: () => {
    dispatch(sendShoppingListAction());
  },
});

const ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

export default ConnectedShoppingList;
