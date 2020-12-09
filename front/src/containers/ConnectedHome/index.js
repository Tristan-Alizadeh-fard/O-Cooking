import { connect } from 'react-redux';
import {  } from 'src/actions/user';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  name: state.user.name,
  recipesUser: state.user.recipesUser,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
 
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
