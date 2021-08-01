let fs = require('fs');

let dirname = process.argv[2];
let extname = process.argv[3];
let path = RegExp('\\.' + extname + '$');

file = fs.readdir(dirname, (err, data)=> {
  for (i = 0; i < data.length; i++) {
    path.test(data[i]) && console.log(data[i])
    
  }
});