import { useState } from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import {
  SearchbarWrapper,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = event => {
    const { value } = event.target;
    setSearchValue(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue.trim() === '') {
      return alert('Please enter keyword for image search');
    }
    onSubmit(searchValue);
    setSearchValue('');
  };

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <BsSearch fill="blue" />
        </SearchFormButton>

        <SearchFormInput
          name="searchValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};