import React from 'react';
import Search from './search/Search.component';

export const TopBar: React.FunctionComponent = (): JSX.Element => (
  <div id="topBar">
    <Search />
  </div>
);

export default TopBar;
