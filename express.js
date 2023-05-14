const express = require('express');
const path = require('path');
const app = express();

const extFilePath = path.join(__dirname,'files');

//Middleware, like interceptor, will access data before routes, can apply checks
const reqFilter = (req,res,next) =>{
    if(req.query.age>=18){
        res.send("WOW age entered")
    }else if(req.query.age<18){
        res.send("Age must be above 18...")
    }
    next();
}
app.use(reqFilter);

app.set('view engine','ejs');

app.get("",(req,res)=>{
    // http://localhost:5000/?name=test
    console.log(req.query.name)
    //using template literal to render html - wrong way
    res.send(`
    <h1>Home page...</h1>
    <a href="/about">Go to about</a>
    `);
});
app.get("/about",(req,res)=>{
    //using external file to render html - right way
    res.sendFile(`${extFilePath}/about.html`)
});

//using ejs template to render dynamic data
app.get('/profile',(req,res)=>{
    //obj to mock dynamic data
    const user = {
        name:"test",
        email:"test@mail.com"
    }
    res.render('profile',{user});
});
app.get("*",(req,res)=>{
    //wildcard routing 
    res.sendFile(`${extFilePath}/404.html`)
});

//use() is a  middleware - using static() to load all static content from specified path
// app.use(express.static(extFilePath));


app.listen(5000);