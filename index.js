const express=require('express');
const app=express();
const path=require('path');
const port=8000;


const staticPath=(path.join(__dirname,"/public"));
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(staticPath));

//app.set('view engine', 'hbs');
// routing
app.get("/",(req,res) =>{
    res.render("index.ejs");
})

app.get("/about",(req,res) =>{
    res.render("about.ejs");
})

app.get("/weather",(req,res) =>{
    res.render("weather.ejs");
})
app.get("*",(req,res) =>{
    res.render("404error.ejs");
})

app.listen(port,() =>{
    console.log(`Welcome to port no ${port}`);
})