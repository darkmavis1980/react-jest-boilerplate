import React, { Suspense } from 'react';
import fetchData from '../../api/fetchData.js';
import Loading from '../Loading';

const resource = fetchData('/sample.json');

const Names = () => {
  const photos = resource.read();

  return (
    <div>
      <h2>List of names</h2>
      <Suspense fallback={<Loading />}>
        <ul>
          {photos.map(item => (
            <li key={item.id}>
              {item.name}
            </li>))}
        </ul>
      </Suspense>
    </div>
  );
};

export default Names;
