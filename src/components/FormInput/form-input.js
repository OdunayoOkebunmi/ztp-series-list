import React from 'react';

import {
  FormInputContainer
} from './form-input-styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <FormInputContainer
    onChange={ handleChange }
    { ...props } />
);

export default FormInput;