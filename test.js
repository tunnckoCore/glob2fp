/**
 * glob2fp <https://github.com/tunnckoCore/glob2fp>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var glob2fp = require('./index');

console.log(glob2fp([
  'a/b/c/???/e/*.*',
  'a/b/c/{foo,bar}/e/*',
  'a/b/c/foo/e/*.js',
  'a/b/**/*.{js,md}',
  'a/{b,{c,foo},e/d}/*.{js,md,txt}',
  'a/b/{c..e}/*.{js,md,txt}'
]));
