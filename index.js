const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const router = express.Router();
const cors = require("cors");
const mongodb = require('./database/db')
const employeeRouter = require('./routes/employee.route')
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.use("/api",employeeRouter)

app.get("/", (req, resp) => {
  // testing Api
 resp.send({})
});

//db connection
// console.log(mongodb,"its mongo connections")
 
app.post("/register", async (req, resp) => {
    try {
        // const user = new User(req.body);
        // let result = await user.save();
        // result = result.toObject();
        // if (result) {
        //     delete result.password;
        //     resp.send(req.body);
        //     console.log(result);
        // } else {
        //     console.log("User already register");
        // }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
app.listen(5100);