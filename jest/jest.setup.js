import jsdom from 'jest-environment-jsdom';
import renderer from 'react-test-renderer';

global.renderer = renderer;
global.jsdom = jsdom;
// global.location = {};
// global.document = {};
