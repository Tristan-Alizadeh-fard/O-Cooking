import React from 'react';
import { Button, Select, Input } from 'semantic-ui-react';
import ModifiedButton from './ModifiedButton';
import './searchBar.scss';

const SearchBar = ({
    searchOption,
    searchInput,
    updateField,
    selectedLocation,
    searchLocation,
  }) => (
  <Input type="text" placeholder="Search..." action>
    <Input type="text" onChange={() => updateField(event.target.value, 'searchInput')} content={searchInput} />
    <Select
      compact
      options={searchOption}
      defaultValue="all"
      onChange={() => updateField(event.target.textContent, 'selectedCategory')}
    />
    {searchLocation.map((location) => (
      <ModifiedButton updateField={updateField} location={location} selectedLocation={selectedLocation} key={location} />
    ))}
    <Button type="button" onClick={() => console.log('submit')}>Search</Button>
  </Input>
)


export default SearchBar;
