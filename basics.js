const http = require('http');
const fs  = require('fs');
const path = require('path');
const filesDirPath = path.join(__dirname,'files');
const data = require('./data');

//creating simple server
http.createServer((req,res)=>{
    res.write("Test Response");
    res.end();
}).listen(4500);


//Simple Get API
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);

//Creating files, getting file names and display list
for(i=0;i<4;i++){
    //template literal used ` ` for string interpolation -> efficient and dynamic vars 
    fs.writeFileSync(`${filesDirPath}/hello${i}.txt`,"dummy files created from node fs");
}
fs.readdir(filesDirPath,(err,files)=>{
    // console.log(files);
});

//Handling async data - Promises
a = 10;
b = 20;
//two parameters for a promise -> resolve and reject
let updatedData = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(b = 90);
    }, 1500);    
});
updatedData.then((data)=>{
    b = data
    console.log("Sum is",a+b);
})

console.log("Server running..." + data[0].name);
