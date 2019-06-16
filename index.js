/*!
 * is-windows <https://github.com/jonschlinkert/is-windows>
 *
 * Copyright © 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

(function(factory) {
  if (exports && typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window !== 'undefined') {
    window.isWindows = factory();
  } else if (typeof global !== 'undefined') {
    global.isWindows = factory();
  } else if (typeof self !== 'undefined') {
    self.isWindows = factory();
  } else {
    this.isWindows = factory();
  }
})(function() {
  'use strict';
  return function isWindows() {
    // eslint-disable-next-line no-console
    console.warn([
      '*****',
      '`is-windows` is deprecated for being a bad security:functionality trade-off.',
      'Seriously.  It\'s a one-liner.  Just paste the code in a file; you did that',
      'for the example anyway; this is just 80 more easy-to-read bytes.',
      'Check out the README.md for details.',
      '*****'
    ].join('\n'));
    return typeof process === 'object' && (process.platform === 'win32' || /^(msys|cygwin)$/.test(process.env.OSTYPE));
  };
});
