import { connect } from 'react-redux';
import {  } from 'src/actions/user';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
 
});

const ConnectedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ConnectedHome;
