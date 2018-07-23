# readBitmap
read bitmap from redis 

---

## Quick Start

### Install
`npm i --save readbitmap`

### Basic Usage

```js
const readBitmap = require('readbitmap')
readBitmap('testBit').then((res) => {
  console.log(res)
})

// [0, 12, 13, 100]
```

### Params

The first param is redis bitmap key.

The second param is redis config, you can see [ioredis](https://github.com/luin/ioredis#connect-to-redis) to get more infomation to connect redis.

## License
MIT


