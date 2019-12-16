# delete-keys 

[![Build Status](https://travis-ci.com/abranhe/delete-keys.svg?branch=master&logo=travis)](https://travis-ci.com/abranhe/delete-keys)
[![GH Status](https://github.com/abranhe/delete-keys/workflows/build/badge.svg)](https://github.com/abranhe/delete-keys/actions)
[![NPM](https://img.shields.io/github/package-json/v/abranhe/delete-keys?logo=npm)](https://npmjs.org/delete-keys)

> Remove the keys you don't want from an object

## Install

```
$ npm install delete-keys
```

Using [Github NPM Registry](https://github.com/features/packages)

```
$ npm install abranhe@delete-keys
```

## Usage

```js
import deleteKeys from 'delete-keys';
 
const obj = {
  name: 'abraham',
  last: 'hernandez',
  _id: '03773',
  phone: '800-000-0000',
};
 
deleteKeys(obj, ['_id', 'phone']);
// {
//   name: 'abraham',
//   last: 'hernandez',
// }
```

## API

### deleteKeys(object, [keys])

#### object

Type: `object`

The object you would like to delete the keys

#### keys

Type: `array`


## License

MIT © [Abraham Hernandez](https://abranhe.com)
