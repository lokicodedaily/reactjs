const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser")
const todoRoutes = require("./routes/todo.route")

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json())

dotenv.config();
const port = 4000
const db = "mongodb+srv://admin:Lokesh%40123@backend.ewj0a.mongodb.net/todos_api?retryWrites=true&w=majority&appName=backend"


mongoose.connect(db).then(() => {
    console.log("connection successful hurray!!")
}).catch((err) => console.log(err))


app.listen(port, () => { console.log(`running at port ${port}`)})

//routes
app.use("/api/todos", todoRoutes)

app.get("/", (req, res) => {
    res.send("hello from nodemon")
})

