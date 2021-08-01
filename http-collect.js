let http = require('http');

let url = process.argv[2];

http.get(url, (request)=> {
  var result = "";
  request.setEncoding("utf8");
  request.on("data", (data) =>{
    result += data;
  });
  request.on("end", ()=> {
    console.log(result.length);
    console.log(result);
  });
});