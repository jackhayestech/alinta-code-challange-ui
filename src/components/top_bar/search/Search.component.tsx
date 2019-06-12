import React from 'react';
import styled from 'styled-components';

interface Search {
  filter: string;
  setFilterText: Function;
}

const SearchWrapper = styled.div`
  margin-right: 20px;
`;

const SearchInput = styled.input`
  padding: 3px;
  font-size: 15px;
`;

export const Search: React.FC<Search> = ({
  filter,
  setFilterText,
}): JSX.Element => (
  <SearchWrapper>
    <SearchInput
      type="text"
      placeholder="search"
      value={filter}
      onChange={e => {
        setFilterText(e.target.value);
      }}
    />
  </SearchWrapper>
);

export default Search;
