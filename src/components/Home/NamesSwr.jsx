import React from 'react';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(({data}) => data);

const NamesSwr = () => {
  const { data: namesList } = useSWR('/sample.json', fetcher, { suspense: true});

  return (
    <div>
      <h2>List of names with SWR</h2>
      <p>This component will use the <a href="https://swr.vercel.app/" target="_blank" rel="noreferrer">SWR hook</a> for fetching data.</p>
      <ul>
        {namesList.map(item => (
          <li key={item.id}>
            {item.name}
          </li>))}
      </ul>
    </div>
  );
};

export default NamesSwr;
