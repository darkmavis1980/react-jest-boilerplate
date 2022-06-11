import React from 'react';
import TestRenderer from 'react-test-renderer';
import Home from './Home';

const wrapper = TestRenderer.create(<Home />);
const instance = wrapper.root;

describe('Home (Component)', () => {
  it('should match the snapshot', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('should render the hello world title', () => {
    expect(instance.findByType('h1').children).toContain('Hello World');
  });
});