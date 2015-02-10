/**
 * glob2fp <https://github.com/tunnckoCore/glob2fp>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var glob2fp = require('./index');
var parsePath = require('parse-filepath');

describe('glob2fp:', function() {
  it('should accept array of glob patterns', function(done) {
    var actual = glob2fp([
      'a/b/c/???/e/*.*',
      'a/b/c/{foo,bar}/e/*',
      '!a/b/c/foo/e/*.js',
      'a/b/**.{js,md}',
      'a/{b,{c,foo},e/d}/*.{js,md,txt}',
      'a/b/{c..e}/*.{js,md,txt}'
    ]);
    var expected = [
      'a/b/c',
      'a/b/c',
      'a/b/c/foo/e',
      'a/b',
      'a',
      'a/b'
    ];

    assert.deepEqual(actual, expected);
    done();
  });
  it('should accept string glob pattern', function(done) {
    var actual = glob2fp('a/b/c/???/e/*.*');
    var expected = 'a/b/c';

    assert.strictEqual(actual, expected);
    done();
  });
  it('should return empty string when no arguments', function(done) {
    var actual = glob2fp();
    var expected = '';

    assert.strictEqual(actual, expected);
    done();
  });
  it('should support options.criteria', function(done) {
    var actual = glob2fp('a/r/s/w/q/{b,{c,foo},e/d}/*.{js,md,txt}', {
      criteria: function(fp) {
        return parsePath(fp).dirname
      }
    });
    var expected = 'a/r/s/w/q';

    assert.strictEqual(actual, expected);
    done();
  });
});
