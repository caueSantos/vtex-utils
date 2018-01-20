[![Build Status](https://travis-ci.org/Zeindelf/vtex-utils.svg?branch=master)](https://travis-ci.org/Zeindelf/vtex-utils)
[![npm version](https://badge.fury.io/js/vtex-utils.svg)](https://badge.fury.io/js/vtex-utils)
[![David](https://david-dm.org/zeindelf/vtex-utils.svg)](https://github.com/Zeindelf/vtex-utils)

# VtexUtils.js

A collection of utilities methods for Vtex stores.

## Table of contents

- [Main](#main)
- [Getting started](#getting-started)
- [Vtex Methods](#vtex-methods)
- [Global Methods](#global-methods)
- [Tests](#tests)
- [License](#license)
- [Dependencies](#dependencies)
- [Todo](#todo)

## Main

```text
dist/
├── vtex-utils.js        (UMD)
├── vtex-utils.min.js    (UMD, compressed)
├── vtex-utils.common.js (CommonJS, default)
└── vtex-utils.esm.js    (ES Module)
```

## Getting started

### Direct download

Download the script [here](https://github.com/Zeindelf/vtex-utils/blob/master/dist/vtex-utils.min.js) and include it.

```html
<script type="text/javascript" src="/arquivos/vtex-utils.min.js"></script>
```

### Package Managers

VtexUtils.js supports [npm](https://www.npmjs.com/package/vtex-utils) under the name `vtex-utils`.

```shell
npm install vtex-utils --save
```

### Module Loaders

VtexUtils.js can also be loaded as an CommonJS or ES6 module (recomended).

```js
// CommomJS
var VtexUtils = require('vtex-utils');

// ES6 module
import VtexUtils from 'vtex-utils';
```

### Usage

With UMD (Universal Module Definition), the package is available on `VTEX` namespace.

```js
// Initialize constructor
var vtexUtils = new VTEX.VtexUtils();

// VtexHelpers
var vtexHelpers = vtexUtils.vtexHelpers;

// GlobalHelpers
var globalHelpers = vtexUtils.globalHelpers;
```

## Vtex Methods

### vtexHelpers.formatPrice(number[, thousands[, decimals[, length[, currency]]]])

Formats Vtex price

- **number**:
  - Type: `Integer`
  - The number to format

- **thousands** (optional):
  - Type: `String`
  - Default: `'.'`
  - The thousands delimiter

- **decimals** (optional):
  - Type: `String`
  - Default: `','`
  - The decimal delimiter

- **length** (optional):
  - Type: `Integer`
  - Default: `2`
  - The length of decimal

- **currency** (optional):
  - Type: `String`
  - Default: `'R$ '`
  - Set currency

#### Example

```js
vtexHelpers.formatPrice(1234); // R$ 12,34
vtexHelpers.formatPrice(123456); // R$ 1.234,56
vtexHelpers.formatPrice(123456, null, ',', 3); // R$ 1234,560
vtexHelpers.formatPrice(123456, ',', '.', 2, '$ '); // $ 1,234.56
```

### vtexHelpers.getOriginalImage(src)

Get the original VTEX image source from a thumb

- **src**:
  - Type: `String`
  - The source of the thumb

#### Example

```js
vtexHelpers.getOriginalImage('http://domain.vteximg.com.br/arquivos/ids/155242-292-292/image.png');
// http://domain.vteximg.com.br/arquivos/ids/155242/image.png
```

### vtexHelpers.getResizedImage(src, width, height)

Change the width & height from a given VTEX image source

- **src**:
  - Type: `String`
  - The source of the image

- **width**:
  - Type: `String | Integer`
  - The new image with

- **height**:
  - Type: `String | Integer`
  - The new image height

#### Example

```js
vtexHelpers.getResizedImage('http://domain.vteximg.com.br/arquivos/ids/155242-292-292/image.png', 500, 600);
// http://domain.vteximg.com.br/arquivos/ids/155242-500-600/image.png

vtexHelpers.getResizedImage('http://domain.vteximg.com.br/arquivos/ids/155242/image.png', 100, 100);
// http://domain.vteximg.com.br/arquivos/ids/155242-100-100/image.png
```

### vtexHelpers.getServerTime(callback)

Get the Vtex server time

- **callback**:
  - Type: `Function`
  - The callback to call when the request finishes. The callback will a javascript Date object.

#### Example

```js
vtexHelpers.getServerTime(function(date) {
    window.console.log(date.getFullYear());
});
```

### vtexHelpers.getCategories(categoryId, depth)

Get category tree

- **categoryId** (optional):
  - Type: `Integer`
  - Default: `undefined`
  - Return the specific Category

- **depth** (optional):
  - Type: `Integer`
  - Default: `50`
  - The tree depth

#### Example

```js
vtexHelpers.getCategories().then(function(res) {
    window.console.log(res)
}); // Return all categories

vtexHelpers.getCategories(1000001, 1).then(function(res) {
    window.console.log(res));
}); // Return first level from category id
```

### vtexHelpers.replaceBreakLines(str)

Replace break lines from product descriptions/more

- **str**:
  - Type: `String`
  - String to replace

#### Example

```js
var string = 'Foo\nBar\n\rBaz\r';

vtexHelpers.replaceBreakLines(string); // 'Foo<br />Bar<br /><br />Baz<br />'
```

### vtexHelpers.checkLogin()

Check if the user is logged into Vtex

#### Example

```js
vtexHelpers.checkLogin().then(function(res) {
    // If user defined
    console.log(res);
})
.fail((err) => {
    // If user isn't defined
    console.log(err)
});
```

### vtexHelpers.openPopupLogin(noReload)

Open default Vtex popup login

- **noReload** (optional):
  - Type: `Boolean`
  - Default: `false`
  - Reload page after login

#### Example

```js
vtexHelpers.openPopupLogin(); // Open popup and reload page after success login
vtexHelpers.openPopupLogin(true); // Open popup and don't reload page after success login

```
#### TIP
Use `$(window).on('closed.vtexid', callback)` event to set any property if `noReload` is `true
`

## Global Methods

### globalHelpers.isArray(value)

Check if the given value is an array.

- **value**:
  - Type: `Mixed`
  - The value to check.

#### Example

```js
globalHelpers.isArray([]); // true
globalHelpers.isArray([{}, {}]); // true
globalHelpers.isArray({}); // false
```

### globalHelpers.isBoolean(value)

Check if the given value is a boolean value.

- **value**:
  - Type: `Mixed`
  - The value to check.

#### Example

```js
globalHelpers.isNumber(true); // true
globalHelpers.isNumber(false); // true
globalHelpers.isNumber(!0); // true
globalHelpers.isNumber(!1); // true
globalHelpers.isNumber('true'); // false
globalHelpers.isNumber('false'); // false
```

### globalHelpers.isEmail(email)

Check if a string is a valid mail.

- **email**:
  - Type: `String`
  - The string to check

#### Example

```js
globalHelpers.isEmail('email@email.com'); // true
globalHelpers.isEmail('email@email'); // false
```

### globalHelpers.isFunction(value)

Check if the given value is a function.

- **value**:
  - Type: `Mixed`
  - The value to check.

#### Example

```js
var foo = function() {};
var bar = '';

globalHelpers.isFunction(foo); // true
globalHelpers.isFunction(bar); // false
```

### globalHelpers.isJson(str)

Check if a string is a valid JSON.

- **str**:
  - Type: `String`
  - The string to check

#### Example

```js
var json = '{"foo": "Foo", "bar": "Bar"}';

globalHelpers.isJson(json); // true
globalHelpers.isJson('json'); // false
```

### globalHelpers.isNumber(value)

Check if the given value is a number.

- **value**:
  - Type: `Mixed`
  - The value to check.

#### Example

```js
globalHelpers.isNumber(123); // true
globalHelpers.isNumber(123.45); // true
globalHelpers.isNumber('string'); // false
```

### globalHelpers.isObject(value)

Check if the given value is an object

- **value**:
  - Type: `Mixed`
  - The String

#### Example

```js
globalHelpers.isObject({foo: 'Foo'}); // true
globalHelpers.isObject('Foo'); // false
```

### globalHelpers.isObjectEmpty(obj)

Verify if as objects is empty

- **obj**:
  - Type: `Object`
  - The object to verify

#### Example

```js
isObjectEmpty({}); // true
isObjectEmpty({foo: 'Foo'}); // false
```

### globalHelpers.isPlainObject(value)

Check if the given value is a plain object.

- **value**:
  - Type: `Mixed`
  - The value to check.

#### Example

```js
globalHelpers.isPlainObject({}); // true
globalHelpers.isPlainObject([{}]); // false
globalHelpers.isPlainObject('foo'); // false
```

### globalHelpers.isString(value)

Check if the given value is a string.

- **value**:
  - Type: `Mixed`
  - The value to check.

#### Example

```js
globalHelpers.isString('string'); // true
globalHelpers.isString(123); // false
globalHelpers.isString(123.45); // false
```

### globalHelpers.isUndefined(value)

Check if the given value is undefined.

- **value**:
  - Type: `Mixed`
  - The value to check.

#### Example

```js
globalHelpers.isUndefined(foo); // true

var foo = 'Foo';
globalHelpers.isUndefined(foo); // false
```

### globalHelpers.arrayUnique(arr)

Return an array with unique values

- **arr**:
  - Type: `Array`
  - The array

#### Example

```js
globalHelpers.arrayUnique([1, 2, 2, 3, 4, 5, 5, 6]); // [1, 2, 3, 4, 5, 6]
```

### globalHelpers.capitalize(str)

Capitalize a string

- **str**:
  - Type: `String`
  - The String

#### Example

```js
globalHelpers.capitalize('foo bar'); // 'Foo Bar'
```

### globalHelpers.cleanArray(array)

Removes empty index from a array

- **array**:
  - Type: `Array`
  - The array

#### Example

```js
globalHelpers.cleanArray([1, 2, , 3, , , 4]); // [1, 2, 3, 4]
```

### globalHelpers.escape(str)

Replace <, >, &, ', " and / with HTML entities.

- **str**:
  - Type: `String`
  - The string to check

#### Example

```js
var markup = '<p>"Lorem ipsum"</p>';

globalHelpers.escape(markup);
// &lt;p&gt;&quot;Lorem ipsum&quot;&lt;&#x2F;p&gt;
```

### globalHelpers.extend(obj, args)

Extend the given object

- **obj**:
  - Type: `Object`
  - The object to be extended

- **args**:
  - Type: `Object`
  - The rest objects which will be merged to the first object

#### Example

```js
var obj1 = {foo: 'Foo', bar: 'Bar'};
var obj2 = {foz: 'Foz', baz: 'Baz'};

globalHelpers.extend({}, obj1, obj2); // {foo: 'Foo', bar: 'Bar', foz: 'Foz', baz: 'Baz'}
```

### globalHelpers.getUrlParameter(name, entryPoint)

Get url params from a query string

- **name**:
  - Type: `String`
  - Param name

- **entryPoint** (optional):
  - Type: `String`
  - Default: Actual url
  - Full url or query string

#### Example

```js
globalHelpers.// URL: https://site.com?param1=foo&param2=bar
globalHelpers.getUrlParameter('param1'); // foo
globalHelpers.getUrlParameter('param2'); // bar

// Given entry point
var url = 'http://www.site.com?param1=foo&param2=bar&param3=baz';
globalHelpers.getUrlParameter('param3', url); // baz
```

### globalHelpers.implode(pieces, glue)

Join array elements with glue string - PHP implode alike

- **pieces**:
  - Type: `Array | Object`
  - The array|object to implode.  If object it will implode the values, not the keys.

- **glue** (optional):
  - Type: `String`
  - Default: `,`
  - The glue

#### Example

```js
globalHelpers.implode(['Foo', 'Bar']); // 'Foo,Bar'
```

### globalHelpers.length(item)

Return the length of an item (Object mostly)

- **item**:
  - Type: `Mixed`
  - The String

#### Example

```js
globalHelpers.length('Validate string'); // 15
globalHelpers.length([1, 2, 3, 4, 5]); // 5
globalHelpers.length({foo: 'Foo', bar: 'Bar'}); 2
globalHelpers.length([{foo: 'Foo'}, {bar: 'Bar'}, {baz: 'Baz'}]); 3
```

### globalHelpers.objectSearch(object, needle)

Search through an object recursively and return the first match of the key:value passed

- **object**:
  - Type: `Object`
  - The haystack

- **needle**:
  - Type: `Object`
  - Key value pair that will be searched

#### Example

```js
var data = [{
    id: 0,
    name: 'key 0',
    children: [{
        id: 1,
        name: 'key 1',
        children: [{
            id: 2,
            name: 'key 2',
            item: [{
                id: 3,
                name: 'key 3'
            }],
            item: [{
                id: 4,
                name: 'key 4'
            }]
        }]
    }]
}];

globalHelpers.objectSearch(data, {id: 4}); // { id: 4, name: 'key 4'};
```

### globalHelpers.removeAccent(str)

Remove accents from a strin

- **str**:
  - Type: `String`
  - The string to remove accents

#### Example

```js
globalHelpers.removeAccent('Olá Mündô!'); // 'Ola Mundo!'
```

### globalHelpers.shuffleArray(array)

Randomize a array elements with Fisher–Yates shuffle algorithm base

- **array**:
  - Type: `Array`
  - The array to randomize

#### Example

```js
globalHelpers.shuffleArray([1, 2, 3, 4]); // [3, 2, 4, 1]
```

### globalHelpers.slugifyText(str)

Slugify a text, removing/replacing all special characters and spaces with dashes '-'

- **str**:
  - Type: `String`
  - The string to sanitize

#### Example

```js
globalHelpers.slugifyText('Olá Mundo!'); // 'ola-mundo'
```

### globalHelpers.stripHost(url)

Removes the host from an url

- **url**:
  - Type: `String`
  - The url

#### Example

```js
globalHelpers.stripHost("http://test.com.br/contact/test"); //  "/contact/test"
```

### globalHelpers.stripHttp(url)

Removes the protocol from an url

- **url**:
  - Type: `String`
  - The url

#### Example

```js
globalHelpers.stripHttp('http://test.com.br/contact/test'); // '//test.com.br/contact/test'
globalHelpers.stripHttp('https://test.com.br/contact/test'); // '//test.com.br/contact/test'
```

### globalHelpers.strReplace(search, replace, subject)

Multiple string replace, PHP str_replace clone

- **search**:
  - Type: `String | Array`
  - The value being searched for, otherwise known as the needle. An array may be used to designate multiple needles.

- **replace**:
  - Type: `String | Array`
  - The replacement value that replaces found search values. An array may be used to designate multiple replacements.

- **subject**:
  - Type: `String`
  - The subject of the replacement

#### Example

```js
globalHelpers.strReplace(['olá', 'mundo'], ['hello', 'world'], 'olá mundo'); // 'hello world'
globalHelpers.strReplace(['um', 'dois'], 'olá', 'um dois três'); // Output 'olá olá três'
```

### globalHelpers.unescape(str)

Replaces HTML encoded entities with <, >, &, ', " and /.

- **str**:
  - Type: `String`
  - The string to check

```js
var markup = '&lt;p&gt;&quot;Lorem ipsum&quot;&lt;&#x2F;p&gt;';

globalHelpers.unescape(markup);
// <p>"Lorem ipsum"</p>
```

### globalHelpers.unserialize(str)

Unserialize a query string into an object

- **str**:
  - Type: `String`
  - The string that will be converted into a object

#### Example

```js
// str can be '?param1=foo&param2=bar&param3=baz', 'param1=foo&param2=bar&param3=baz' or a full url
var url = 'http://www.site.com?param1=foo&param2=bar&param3=baz';
globalHelpers.unserialize(url); // {param1: 'foo', param2: 'bar', param3: 'baz'}
```


## Tests

Tests are using mocha, to run the tests use:

```shell
$ npm test
```

## License

VtexUtils.js is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Dependencies

jQuery 1.8.3+