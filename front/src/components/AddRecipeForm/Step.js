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
  description,
}) => (
  <div className="step">
    <p>Etape {index + 1} : {description}</p>
    <div className="step__icons">
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
  description: PropTypes.string.isRequired,
};

export default Step;
