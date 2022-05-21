let fs = require('fs');
function openFile(){
  fs.open('02-write-file/text.txt', 'a+', (err) => {
    if(err) throw err;
  });}
openFile();
let readline = require('readline'); 
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '>'
});
rl.prompt();
rl.on('line', (input) => {
  input = input.toLowerCase();
  console.log(input);
  rl.resume();
  fs.appendFile('02-write-file/text.txt', input, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    if(input == 'exit'){
      rl.close();
      console.log('bye!');
    }
  });
});
