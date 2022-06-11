import React, { Suspense } from 'react';
import Names from './Names';

const Home = () => (
  <div>
    <h1>Hello World</h1>
    <Suspense fallback={<p>Loading...</p>}>
      <Names />
    </Suspense>
  </div>
);

export default Home;
