const express=require("express");
const app=express();
const path=require("path");


const port=8080;


app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.static(path.join(__dirname,"/public/media")));
app.use(express.static( "public" ) );


// Serve all static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/learn", (req, res) => {
    res.render("mainlearn.ejs");
});


app.get("/learn/:type", (req, res) => {
    let { type } = req.params;
    const learnData = require("./data.json");
    const data = learnData[type];
    console.log(data);
    res.render("learn.ejs", { data });
});

app.get("/practice", (req, res) => {
    res.render("mainquiz.ejs");
});

app.get("/practice/array", (req, res) => {
    res.render("quizarray.ejs");
});

app.get("/practice/linkedlist", (req, res) => {
    res.render("quizlinkedlist.ejs");
});

app.get("/practice/binarytree", (req, res) => {
    res.render("quizbinarytree.ejs");
});

app.get("/test",(req,res)=>{
    res.render("randomques.ejs");
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});
