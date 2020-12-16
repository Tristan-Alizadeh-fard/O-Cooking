import React from 'react';
import {
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Tag = ({
  selectTags,
  selectedTags,
  name,
}) => {
  let chosen = 'grey';
  // si value est dans selected tag alors chosen est blue
  if (selectedTags.includes(name)) {
    chosen = 'blue';
  }
  return (
    <div className="tags__button">
      <Button
        type="button"
        content={name}
        onClick={() => selectTags(name)}
        color={chosen}
      />
    </div>
  );
};

Tag.propTypes = {
  selectTags: PropTypes.func.isRequired,
  selectedTags: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
};

export default Tag;
