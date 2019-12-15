import React from 'react';
import SearchInput from '../../shared/searchInput';
import ProductCard from '../../shared/productCard';
import mockData from './mockProducts.json';

export default () => (
  <article className="homepage">
    {/* eslint-disable-next-line no-console */}
    <SearchInput onChange={console.log} />
    <div className="homepage--deck row justify-content-center ">
      {mockData.map(data => (
        <div
          className="homepage--deck--item col-6 col-md-4 col-lg-3"
          key={data.id}
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ProductCard {...data} />
        </div>
      ))}
    </div>
  </article>
);
