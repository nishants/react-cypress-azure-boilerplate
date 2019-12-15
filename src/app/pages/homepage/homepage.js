import React from 'react';
import SearchInput from '../../shared/searchInput';

export default () => (
  <article id="homepage">
    {/* eslint-disable-next-line no-console */}
    <SearchInput onChange={console.log} />
  </article>
);
