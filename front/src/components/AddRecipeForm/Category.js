import React from 'react';
import {
  Button,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Category = ({
  selectCategory,
  selectedCategory,
  value,
}) => {
  let chosen = 'grey';
  if (value === selectedCategory) {
    chosen = 'blue';
  }
  return (
    <Button
      type="button"
      className="category__button"
      content={value}
      onClick={() => selectCategory(value)}
      color={chosen}
    />
  );
};

Category.propTypes = {
  selectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Category;
