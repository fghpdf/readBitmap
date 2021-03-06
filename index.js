'use strict'

const Redis = require('ioredis')

/**
 * @param {string | buffer} bitmap key or buffer
 * @param {object | string} redis config
 * @return {array}
 */
async function readBitmap(key, redisConfig = { port: 6379, host: '127.0.0.1' }) {
  let bitmapBuffer = key
  if (!Buffer.isBuffer(key) && typeof key === 'string') {
    const redis = new Redis(redisConfig)
    bitmapBuffer = await redis.getBuffer(key)
  }
  const bitmapArray = [...bitmapBuffer]
  const result = []

  for (let i = 0; i < bitmapArray.length; i++) {
    const binary = bitmapArray[i].toString(2)
    const cover = 8 - binary.length

    for (let j = 0; j < binary.length; j++) {
      if (+binary[j] === 1) {
        result.push(8 * i + cover + j)
      }
    }
  }
  return result
}

module.exports = readBitmap