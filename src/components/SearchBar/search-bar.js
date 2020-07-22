import React from 'react';
import FormInput from '../FormInput/form-input';
import { Button } from 'react-bootstrap'
import {
  GroupContainer
} from './search-bar-styles';

const SearchBar = ({ handleChange, queryName, handleSubmit }) => {

  const handleFilter = event => {
    const { value } = event.target;
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <GroupContainer>
          <FormInput
            type='text'
            name='searchQuery'
            placeholder='Enter TV series title'
            required
            onChange={ handleChange }
            value={ queryName }
          />
        </GroupContainer>
        <div className="text-center">
          <Button
            type='submit'
            variant="primary"
            className="text-center">
            Submit</Button>
          <p>Filter by</p>
          <FormInput
            type='radio'
            name='series_filter'
            onChange={ handleFilter }
            value='seasons'

          />Seasons
           <FormInput
            type='radio'
            name='series_filter'
            onChange={ handleFilter }
            value='episodes'

          />Episodes
        </div>
      </form>

    </div>
  )
}

export default SearchBar;