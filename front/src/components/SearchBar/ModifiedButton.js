import React from 'react';
import {
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ModifiedButton = ({
  updateField,
  selectedLocation,
  location,
}) => {
  let chosen = 'grey';
  if (location === selectedLocation) {
    chosen = 'blue';
  }
  return (
    <Button
      type="button"
      content={location}
      onClick={() => updateField(event.target.textContent, 'selectedLocation')}
      color={chosen}
    />
  );
};

ModifiedButton.propTypes = {
  selectedLocation: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ModifiedButton;
