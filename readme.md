## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Recursively extract/find/search non-glob (real/file/base) path from/in glob pattern or array of glob patterns using [is-glob][is-glob]. Actually default returns `dirname` that isnt looks like glob. But you can provide another criteria.

## Install
```
npm i --save glob2fp
npm test
```


## Features
- get real path from glob pattern or array of glob patterns 
- support defining another criteria, default is based on `dirname` (nearest non-glob dirname)
- recursively lookup


### [glob2fp](index.js#L52)
> For more use-cases see the [tests](./test.js)
> Recursively extract real path from glob pattern

- `fp` **{Array|String}** glob pattern(s)  
- `opts` **{Object}** only available `options.criteria` function  
- `returns` **{Array|String}**

**Example**

```js
var glob2fp = require('glob2fp');
glob2fp('a/b/c/???/e/*.*');
//=> 'a/b/c'
glob2fp('a/b/c/{foo,bar}/e/*');
//=> 'a/b/c'
glob2fp('a/b/c/foo/e/*.js');
//=> 'a/b/c/foo/e'
glob2fp('!a/b/**.{js,md}');
//=> 'a/b'
glob2fp();
//=> ''
```

Or array of glob patterns

```js
glob2fp([
  'a/b/c/???/e/*.*',
  'a/b/c/{foo,bar}/e/*',
  '!a/b/c/foo/e/*.js',
  'a/b/**.{js,md}',
  'a/{b,{c,foo},e/d}/*.{js,md,txt}',
  'a/b/{c..e}/*.{js,md,txt}'
]);
//=> [
  'a/b/c',
  'a/b/c',
  'a/b/c/foo/e',
  'a/b',
  'a',
  'a/b'
]
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/glob2fp
[npmjs-img]: https://img.shields.io/npm/v/glob2fp.svg?style=flat&label=glob2fp

[coveralls-url]: https://coveralls.io/r/tunnckoCore/glob2fp?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/glob2fp.svg?style=flat

[license-url]: https://github.com/tunnckoCore/glob2fp/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/glob2fp
[travis-img]: https://img.shields.io/travis/tunnckoCore/glob2fp.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/glob2fp
[daviddm-img]: https://img.shields.io/david/tunnckoCore/glob2fp.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/glob2fp/graphs/contributors

[is-glob]: https://github.com/jonschlinkert/is-glob
***

_Powered and automated by [kdf](https://github.com/tunnckoCore), February 10, 2015_