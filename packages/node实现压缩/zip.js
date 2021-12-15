// 实现压缩
import fs from 'fs'
import zlib from'zlib'

const gzip = zlib.createGzip()
const outStream = fs.createWriteStream('output.js.gz')
fs
    .createReadStream('./lib/node-stream.js')
    .pipe(gzip)
    .pipe(outStream)