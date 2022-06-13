import React from 'react';
import fetchData from '../../api/fetchData.js';

const resource = fetchData('/sample.json');

const Names = () => {
  const namesList = resource.read();

  return (
    <div>
      <h2>List of names</h2>
      <ul>
        {namesList.map(item => (
          <li key={item.id}>
            {item.name}
          </li>))}
      </ul>
    </div>
  );
};

export default Names;
