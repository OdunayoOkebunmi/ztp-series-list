import React from 'react';

import {
  FormInputContainer, GroupContainer
} from './form-input-styles';

const FormInput = ({ handleChange, label, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={ handleChange }
      { ...props } />
  </GroupContainer>
);

export default FormInput;