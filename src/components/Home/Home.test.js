import React from 'react';
import Home from './Home';

const wrapper = render(<Home />);

describe('Home (Component)', () => {
  it('should render the hello world title', () => {
    expect(wrapper.find('h1').html()).toContain('Hello World');
  });
});