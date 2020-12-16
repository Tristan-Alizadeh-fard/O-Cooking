import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import { updateUserField, searchBar } from 'src/actions/user';

const mapStateToProps = (state) => ({
  searchOption: state.user.searchOption,
  searchInput: state.user.searchInput,
  selectedLocation: state.user.selectedLocation,
  searchLocation: state.user.searchLocation,
  selectedCategory: state.user.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  updateField: (newValue, name) => {
    dispatch(updateUserField(newValue, name));
  },
  search: () => {
    dispatch(searchBar());
  }
});

const ConnectedSearchBar = connect(mapStateToProps, mapDispatchToProps)(SearchBar);

export default ConnectedSearchBar;
