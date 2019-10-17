const express = require("express");     // Importing Package
const path = require("path");
const ejs = require("ejs");
const route = require("./Routes/routes");
const app = express();                  // Executing application
const mongoose = require("mongoose");   // Importing Package
mongoose.Promise = global.Promise; //tell mongoose es6 promises
const PORT = 2019;         


// Specifies where to find dependencies for the view
app.use(express.static(__dirname+'/Public'));
app.set("views", path.join(__dirname, 'Views'));

app.set('view engine', 'ejs');



// ROUTES
app.use(route);



































mongoose.connect("mongodb://localhost:27017/api", { useNewUrlParser: true ,useUnifiedTopology:true})
.then(() => {
    console.log("CONNECTED");
}).catch(err => {
    console.log(err);
});

app.listen(PORT, ()=> console.log("Server started!!!")); // Listening for request and response