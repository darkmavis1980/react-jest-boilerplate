import React from 'react';
import { create } from 'react-test-renderer';
import Home from './Home';

describe('Home (Component)', () => {
  it('should match the snapshot', async () => {
    const tree = await create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the hello world title', async () => {
    const wrapper = await create(<Home />);
    const instance = wrapper.root;
    expect(instance.findByType('h1').children).toContain('Hello World');
  });
});
