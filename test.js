'use strict';

require('mocha');
var assert = require('assert');
var isWindows = require('./');

describe('isWindows', function() {
  it('should return true if the platform is windows:', function() {
    if (process && process.platform !== 'win32' && !/^(msys|cygwin)$/.test(process.env.OSTYPE)) {
      assert.equal(isWindows(), false);
    } else {
      assert.equal(isWindows(), true);
    }
  });
});
