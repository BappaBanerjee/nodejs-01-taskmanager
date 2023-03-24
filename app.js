const express = require("express");
const app = express();
require('dotenv').config()
const tasks = require('./routes/task');
const port = 5000;

const connectDB = require("./db/dbconfig");
const mongouri = process.env.MONGOURI;

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send("Task MAnager");
})

app.use('/api/v1/task', tasks);

//

const start = async () => {
    try {
        await connectDB(mongouri);
        app.listen(port, console.log("app is listing to port 5000"));
    } catch (error) {
        console.log(error)
    }
}

start();
