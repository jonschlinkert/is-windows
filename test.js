/*!
 * is-windows <https://github.com/jonschlinkert/is-windows>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps: mocha */
var assert = require('assert');
var isWindows = require('./');

describe('isWindows', function () {
  it('should return true if the platform is windows:', function () {
    if (process && process.platform === 'win32') {
      assert.equal(isWindows(), true);
    } else {
      assert.equal(isWindows(), false);
    }
  });
});
