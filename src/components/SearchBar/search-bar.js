import React from 'react';
import FormInput from '../FormInput/form-input';
import { Button } from 'react-bootstrap'

const SearchBar = ({ handleChange, queryName, handleSubmit }) => {

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <FormInput
          type='text'
          name='searchQuery'
          placeholder='Enter TV series title'
          required
          onChange={ handleChange }
          value={ queryName }
        />
        <div className="text-center">
          <Button
            type='submit'
            variant="primary"
            className="text-center">
            Submit</Button>
        </div>
      </form>

    </div>
  )
}

export default SearchBar;