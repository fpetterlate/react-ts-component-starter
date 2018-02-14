/*eslint-disable no-var*/

// Tests are placed alongside files under test.
// This file does the following:
// 1. Registers babel for transpiling our code for testing
// 2. Configure enzyme-react adapter
// 3. Disables Webpack-specific features that Mocha doesn't understand.
// 4. Requires jsdom so we can test via an in-memory DOM in Node
// 5. Sets up global vars that mimic a browser.

// This assures the .babelrc dev config (which includes hot module reloading code) doesn't apply for tests.
process.env.NODE_ENV = 'test';

// Register babel so that it will transpile ES6 to ES5 before our tests run.
require('babel-register')();

//Configure adapter for react
const enzyme = require("enzyme");
const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

// Disable webpack-specific features for tests since Mocha doesn't know what to do with them.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};
require.extensions['.svg'] = function () {return null;};

let exposedProperties = ['window', 'navigator', 'document'];

// Configure JSDOM and set global variables to simulate a browser environment for tests.
const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const {document} = (new JSDOM('')).window;

global.document = document;
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef