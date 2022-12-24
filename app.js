//jshint es6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true}); //подключение к бд локально

const itemsSchema = new mongoose.Schema ({
        name: String
});

const Item = mongoose.model("Items", itemsSchema);


app.set('view engine', 'ejs'); // ne ponimaiu
//test git

app.get("/", function(req, res){
    
    res.render("list", {kindOfDay: day, newField: items}); 

});

app.post("/", function (req, res) {
    let item = req.body.toDoForm;
    if (item != ""){
        if (req.body.list === "Work") {
            workItems.push(item);
            res.redirect("/work")

            }else {
                items.push(item);
                res.redirect("/");
                }
    }else return item;
    
});

app.get("/work", function(req, res){
    let day = date.getDay();
    res.render("list", {kindOfDay: "Work List", newField: workItems})
});

app.post("/work", function (req, res) {
    let item = req.body.toDoForm;

    workItems.push(item);
    res.redirect("/work");

});
///wfwf
//cadscsc

app.get("/about", function(req, res){
    res.render("about");
});

//dwqdqd// ff




app.listen(process.env.PORT || 3000, function() {
    console.log("Server started");
});


