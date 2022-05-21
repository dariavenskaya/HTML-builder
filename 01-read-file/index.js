let fs = require('fs');
let path = require('path');
let pathName = path.join(__dirname, 'text.txt');
let readStream = new fs.ReadStream(pathName, 'utf-8');
readStream.on('readable', function () {
  let data = readStream.read();
  if (data) {
    console.log(data.toString());
  }
});
