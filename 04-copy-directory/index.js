
// const util = require('util');
const fs = require('fs');
// const path = require('path');
// const copyFilePromise = util.promisify(fs.copyFiles);
// const srcDir = '04-copy-directory/files';
// const destDir = '04-copy-directory/files-copy';
fs.mkdir('04-copy-directory/files-copy', err => {
  if(err) throw err;
  else{
    console.log('done');
  }
});
fs.readdir('04-copy-directory/files-copy', (err, files) => {
  if(err) throw err; 
  else{
    console.log(files);
  }
});