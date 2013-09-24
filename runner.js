var fs = require('fs')
  , path = require('path')
  , basename = path.basename
  , exists = fs.existsSync || path.existsSync
  , join = path.join;

function lookupFiles(path, recursive) {
  var files = [];

  if (!exists(path)) path += '.js';
  var stat = fs.statSync(path);
  if (stat.isFile()) return path;

  fs.readdirSync(path).forEach(function(file){
    file = join(path, file);
    var stat = fs.statSync(file);
    if (stat.isDirectory()) {
      if (recursive) files = files.concat(lookupFiles(file, recursive));
      return
    }
    if (!stat.isFile()
        || basename(file).indexOf('test_') == -1
        || basename(file)[0] == '.') return;
    files.push(file);
  });

  return files;
}

global.requirejs = require('requirejs');
var Mocha = require("mocha");

// create mocha instance and pass options
var mocha = new Mocha({ ui: 'bdd', reporter: 'dot' });

// load assertion frameworks
global.assert = require('assert');

// define window after loading modules
global.window = global;

// add test suites
mocha.files = lookupFiles('./test', true);

mocha.run();
