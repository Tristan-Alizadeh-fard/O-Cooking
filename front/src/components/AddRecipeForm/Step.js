import React from 'react';
import {
  Button,
  Icon,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './addRecipeForm.scss';

const Step = ({
  updateRecipe,
  removeFromRecipe,
  index,
  content,
}) => (
  <div className="step">
    <p>{content}</p>
    <div className="step__icons">
      <Button
        type="button"
        onClick={() => console.log('steps', index)}
      >
        <Icon name="pencil" color="blue" />
      </Button>
      <Button
        type="button"
        onClick={() => removeFromRecipe('steps', index)}
      >
        <Icon name="delete" color="red" />
      </Button>
    </div>
  </div>
);

Step.propTypes = {
  updateRecipe: PropTypes.func.isRequired,
  removeFromRecipe: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
};

export default Step;
