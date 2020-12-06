import { connect } from 'react-redux';
import Page from 'src/components/Page';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
 
});

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(Page);

export default ConnectedPage;
