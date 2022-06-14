import React, { Suspense } from 'react';
import Names from './Names';
import ErrorBoundary from '../ErrorBoundary';
import Loading from '../Loading';

const Home = () => (
  <div>
    <h1>Hello World</h1>
    <ErrorBoundary fallback={<p>Could not load the data from the API.</p>}>
      <Suspense fallback={<Loading />}>
        <Names />
      </Suspense>
    </ErrorBoundary>
  </div>
);

export default Home;
