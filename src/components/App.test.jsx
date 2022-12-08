import React, { StrictMode } from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

const wrapper = TestRenderer.create(<StrictMode><App /></StrictMode>);
const instance = wrapper.root;

describe('(Component) App', () => {
  it('should match the snapshot', () => {
    const tree = TestRenderer
      .create(<StrictMode><App /></StrictMode>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('should inject the Router component', () => {
    expect(instance.findByProps({className: 'app'}).children.length).toBe(1);
  });
});
