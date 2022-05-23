const fs = require('fs');
const path = require('path');

fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
  if(err) throw err; 
  else {
    files.forEach(file => {
      fs.stat(path.join(__dirname, 'secret-folder', file), (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
        else {
          let fileName = path.basename(file).toString().split('.')[0];
          let fileExt = path.extname(file).toString().split('.')[1];
          console.log(fileName, '-', fileExt, '-', stats.size / 1000 + 'kb');    
        }});
    });
  }
});
