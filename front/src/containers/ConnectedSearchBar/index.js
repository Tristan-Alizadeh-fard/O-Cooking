import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import { updateUserField } from 'src/actions/user';

const mapStateToProps = (state) => ({
  searchOption: state.user.searchOption,
  searchInput: state.user.searchInput,
  selectedLocation: state.user.selectedLocation,
  searchLocation: state.user.searchLocation,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
});

const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default ConnectedSearchBar;
