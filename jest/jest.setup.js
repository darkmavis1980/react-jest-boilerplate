import jsdom from 'jest-environment-jsdom';
import renderer from 'react-test-renderer';

global.renderer = renderer;
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
