import React from 'react';
import { Button, Select, Input, Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './searchBar.scss';

const SearchBar = ({
  searchOption,
  searchInput,
  updateField,
  search,
}) => (
  <Input className="search__bar" type="text" placeholder="Search..." action>
    <Input className="input__search__bar" type="text" onChange={() => updateField(event.target.value, 'searchInput')} content={searchInput} />
    <Select
      options={searchOption}
      defaultValue="Toutes les recettes"
      onChange={() => updateField(event.target.textContent, 'selectedCategory')}
    />
    <Button className="button__search" type="button" onClick={() => search()}>Chercher</Button>
  </Input>
);

SearchBar.propTypes = {
  searchOption: PropTypes.array.isRequired,
  updateField: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default SearchBar;
