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

// or connect remote redis server

const readBitmap = require('readbitmap')
readBitmap('testBit', { host: 'redis_host', port: 3306 }).then((res) => {
  console.log(res)
})

// or read buffer
const readBitmap = require('readbitmap')
readBitmap(Buffer.from('0123')).then((res) => {
  console.log(res)
})
```

### Params

The first param is redis bitmap key or buffer, redis config can`t work if you use buffer.

The second param is redis config, you can see [ioredis](https://github.com/luin/ioredis#connect-to-redis) to get more infomation to connect redis.

## License
MIT


