import React from 'react';
import { Button, Select, Input } from 'semantic-ui-react';
import ModifiedButton from './ModifiedButton';
import './searchBar.scss';

// {searchLocation.map((location) => (
//   <ModifiedButton updateField={updateField} location={location} selectedLocation={selectedLocation} key={location} />
// ))};

const SearchBar = ({
    searchOption,
    searchInput,
    updateField,
    selectedLocation,
    searchLocation,
    search,
  }) => (
  <Input type="text" placeholder="Search..." action>
    <Input type="text" onChange={() => updateField(event.target.value, 'searchInput')} content={searchInput} />
    <Select
      compact
      options={searchOption}
      defaultValue="all"
      onChange={() => updateField(event.target.textContent, 'selectedCategory')}
    />
    <Button type="button" onClick={() => search()}>Search</Button>
  </Input>
  )


export default SearchBar;
