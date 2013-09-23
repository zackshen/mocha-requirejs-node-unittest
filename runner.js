global.requirejs = require('requirejs');
var Mocha = require("mocha");

// create mocha instance and pass options
var mocha = new Mocha({ ui: 'bdd', reporter: 'dot' });

// load assertion frameworks
global.assert = require('assert');

// define window after loading modules
global.window = global;

// add test suites
mocha.addFile('test/utils');

mocha.run();
