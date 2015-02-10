/**
 * glob2fp <https://github.com/tunnckoCore/glob2fp>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var glob2fp = require('./index');

describe('glob2fp:', function() {
  it('should accept arrays', function(done) {
    var expected = [
      'a/b/c',
      'a/b/c',
      'a/b/c/foo/e',
      'a/b',
      'a',
      'a/b'
    ];
    var actual = glob2fp([
      'a/b/c/???/e/*.*',
      'a/b/c/{foo,bar}/e/*',
      'a/b/c/foo/e/*.js',
      'a/b/**.{js,md}',
      'a/{b,{c,foo},e/d}/*.{js,md,txt}',
      'a/b/{c..e}/*.{js,md,txt}'
    ]);
    assert.deepEqual(actual, expected);
    done();
  });
});
