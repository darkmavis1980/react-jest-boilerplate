import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import jsdom from 'jest-environment-jsdom';
import renderer from 'react-test-renderer';
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.renderer = renderer;
global.mount = mount;
global.jsdom = jsdom;
global.location = {};
global.document = {};

global.window = Object.create(window);
const url = 'http://localhost';
Object.defineProperty(window, 'location', {
  value: {
    href: url,
  },
  writable: true,
});
