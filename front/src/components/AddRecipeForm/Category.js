import React from 'react';
import {
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Category = ({
  selectCategory,
  selectedCategory,
  name,
}) => {
  let chosen = 'grey';
  if (name === selectedCategory) {
    chosen = 'blue';
  }
  return (
    <Button
      type="button"
      className="category__button"
      content={name}
      onClick={() => selectCategory(name)}
      color={chosen}
    />
  );
};

Category.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Category;
