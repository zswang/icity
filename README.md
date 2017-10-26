icity
-----------

# [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

Get the tools for the city where your phone number is located

## Usage 使用方法

```shell
$ npm install icity --save
```

## Examples 示例

```js
console.log(JSON.stringify(icity.parse('13810570000')))
// > {"province":"北京","city":"北京","areaCode":"010","provider":"中国移动"}

console.log(JSON.stringify(icity.parse('13820570000')))
// > {"province":"天津","city":"天津","areaCode":"022","provider":"中国移动"}
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://npmjs.org/package/icity
[npm-image]: https://badge.fury.io/js/icity.svg
[travis-url]: https://travis-ci.org/zswang/icity
[travis-image]: https://travis-ci.org/zswang/icity.svg?branch=master
[coverage-url]: https://coveralls.io/github/zswang/icity?branch=master
[coverage-image]: https://coveralls.io/repos/zswang/icity/badge.svg?branch=master&service=github