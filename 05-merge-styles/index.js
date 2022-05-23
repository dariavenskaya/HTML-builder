let fs = require('fs');
let path = require('path');
let filesArr = [];
fs.readdir('05-merge-styles/styles', (err, files) => {
  if(err) throw err; 
  else {
    files.forEach(mergeFile => {
      fs.readFile(path.join(__dirname, 'styles', mergeFile), (err) => {
        if (err) throw err;
        if(path.extname(mergeFile) == '.css'){
          filesArr.push(mergeFile);
          console.log(fs.readFile());
          fs.writeFile(path.join(__dirname, 'project-dist', 'bundle.css'), '', (err) => {
            if (err){
              console.log('file is already here!');
            }
            else{
              fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css'),  filesArr.reduce( (acc, el) => acc += el,), (err) => {
                if (err) {
                  console.log(err);
                }
                else{
                  console.log('done, check your index.html!');
                }
              });
            }
          });
          
        }
      });
    });
  }});
