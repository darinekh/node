const http = require('http');
const fs = require('fs');

const server  = http.createServer((req, res) => {
    res.end("Hello Node");
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
//  this task, you will:
// First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// Second, create a program that reads and console.log data from hello.txt


fs.writeFile('welcome.txt',"Hello Node",(err) => {
    if (err) throw err;
    console.log('File created');
});

fs.readFile('welcome.txt',(err, data) => {
    if (err) throw err;
    console.log(data.toString());
});