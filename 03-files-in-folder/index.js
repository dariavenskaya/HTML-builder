const fs = require('fs');
fs.readdir('03-files-in-folder/secret-folder', (err, files) => {
  if(err) throw err; 
  else {
    files.forEach(file => {
      console.log(file);
    });
  }
});
