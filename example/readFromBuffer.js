const readBitmap = require('../index')

readBitmap(Buffer.from('0001')).then((res) => {
  console.log(res)
})