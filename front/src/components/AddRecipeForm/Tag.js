import React from 'react';
import {
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Tag = ({
  selectTags,
  selectedTags,
  value,
}) => {
  let chosen = 'grey';
  // si value est dans selected tag alors chosen est blue
  if (selectedTags.includes(value)) {
    chosen = 'blue';
  }
  return (
    <div className="tags__button">
      <Button
        type="button"
        content={value}
        onClick={() => selectTags(value)}
        color={chosen}
      />
    </div>
  );
};

Tag.propTypes = {
  selectTags: PropTypes.func.isRequired,
  selectedTags: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default Tag;
