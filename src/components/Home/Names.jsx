import React from 'react';
import fetchData from '../../api/fetchData.js';

const resource = fetchData('/sample.json');

const Names = () => {
  const photos = resource.read();

  return (
    <div>
      <div>
        <h2>Loading list of names</h2>
        <ul>
          {photos.map(item => (
            <li key={item.id}>
              {item.name}
            </li>))}
        </ul>
      </div>
    </div>
  );
};

export default Names;
