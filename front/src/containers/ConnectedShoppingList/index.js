import { connect } from 'react-redux';
import { removeFromList, removeShoppingRecipe, getShopListAction } from 'src/actions/user';
import ShoppingList from 'src/components/ShoppingList';

const mapStateToProps = (state) => ({
  shoppingList: state.user.shoppingList,
  listCheck: state.user.listCheck,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromList: (index) => {
    dispatch(removeFromList(index));
  },
  removeShoppingRecipe: (index) => {
    dispatch(removeShoppingRecipe(index));
  },
  getShopListAction: () => {
    dispatch(getShopListAction());
  },
});

const ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

export default ConnectedShoppingList;
