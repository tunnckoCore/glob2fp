/**
 * glob2fp <https://github.com/tunnckoCore/glob2fp>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var parsePath = require('parse-filepath');
var isGlob = require('is-glob');

/**
 * Recursively extract real path from glob pattern
 *
 * **Example:**
 *
 * ```js
 * var glob2fp = require('glob2fp');
 * glob2fp('a/b/c/???/e/*.*');
 * //=> 'a/b/c'
 * glob2fp('a/b/c/{foo,bar}/e/*');
 * //=> 'a/b/c'
 * glob2fp('a/b/c/foo/e/*.js');
 * //=> 'a/b/c/foo/e'
 * glob2fp('!a/b/**.{js,md}');
 * //=> 'a/b'
 * glob2fp();
 * //=> ''
 * ```
 *
 * Or array of glob patterns
 *
 * ```js
 * glob2fp([
 *   'a/b/c/???/e/*.*',
 *   'a/b/c/{foo,bar}/e/*',
 *   '!a/b/c/foo/e/*.js',
 *   'a/b/**.{js,md}',
 *   'a/{b,{c,foo},e/d}/*.{js,md,txt}',
 *   'a/b/{c..e}/*.{js,md,txt}'
 * ])
 * //=> [
 *   'a/b/c',
 *   'a/b/c',
 *   'a/b/c/foo/e',
 *   'a/b',
 *   'a',
 *   'a/b'
 * ]
 * ```
 * @name glob2fp
 * @param  {Array|String} `fp`   glob pattern(s)
 * @param  {Object}       `opts` only available `options.criteria` function
 * @return {Array|String}
 * @api public
 */
module.exports = function glob2fp(fp, opts) {
  if (!fp) {
    return '';
  }

  opts = opts || {};

  if (Array.isArray(fp)) {
    return fp.map(mapFilepath);
  }

  if (isGlob(fp)) {
    return mapFilepath(fp);
  }

  return fp;

  function mapFilepath(fp) {
    fp = fp.charAt(0) === '!' ? fp.slice(1) : fp;
    fp = opts.criteria && opts.criteria(fp) || parsePath(fp).dirname;
    return glob2fp(fp, opts);
  }
};
