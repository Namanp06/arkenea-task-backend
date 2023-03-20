var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const multer = require("multer");
var forms = multer();
const morgan = require("morgan");
const path = require('path');
const hash = require('random-hash'); // you have to install this package:

const mongoDbLocalUrl= "mongodb://127.0.0.1:27017/databaseNaman0001";
const mongoDbAtlasUrl = "mongodb+srv://mongo:jjOsBLDNeEfgOXlV@cluster0.ksfsa90.mongodb.net/myFirstDb?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;
mongoose.connect(mongoDbAtlasUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
const cors = require('cors');
app.use(cors());

app.use(morgan("dev"));
// app.use('/uploads', express.static('uploads'));
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(forms.array()); 
app.use(bodyParser.json());



var User = require('./app/models/user.model')

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require('./app/routes/note.routes.js')(app);
require('./app/routes/location.routes.js')(app);
require('./app/routes/user.routes.js')(app);

// listen for requests
app.listen(3001, function(){
    console.log("Server is listening on port 3000");
});
