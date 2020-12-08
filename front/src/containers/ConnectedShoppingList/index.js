import { connect } from 'react-redux';
import {  } from 'src/actions/user';
import ShoppingList from 'src/components/ShoppingList';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
 
});

const ConnectedShoppingList = connect(mapStateToProps, mapDispatchToProps)(ShoppingList);

export default ConnectedShoppingList;
