
const util = require('util');
const fs = require('fs');
const path = require('path');
const copyFilePromise = util.promisify(fs.copyFiles);
const destDir = '04-copy-directory/files-copy';

fs.mkdir(destDir, err => {
  if(err) {
    console.log('directory already exists');
  }
  else{
    console.log('directory copied');
  }
});
function copyFiles(destDir, files) {
  return Promise.all(files.map(f => {
    const srcDir = '04-copy-directory/files';
    return copyFilePromise(path.join(srcDir, f), path.join(destDir, f));
  }));
}
copyFiles();
// fs.readdir(srcDir, (err) => {
//   if(err){
//     console.log(err);
//   } 
//   else{
//     fs.copyFiles(srcDir, destDir, files => {
//       Promise.all(files.map(file => {
//         copyFilePromise(path.join(srcDir, file), path.join(destDir, file));
//       }));
//     });
    
// files.forEach(file => {
//   fs.copyFile('04-copy-directory/files'+file, '04-copy-directory/files-copy'+file, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log('File successfully copied and moved to new directory.');    
//     }
//   });
// });
//   }
// });