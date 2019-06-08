import React from 'react';

interface Search {
  filter: string;
  setFilterText: Function;
}

export const Search: React.FC<Search> = ({
  filter,
  setFilterText,
}): JSX.Element => (
  <div>
    <p>
      <input
        type="text"
        placeholder="search"
        value={filter}
        onChange={e => {
          setFilterText(e.target.value);
        }}
      />
    </p>
  </div>
);

export default Search;
