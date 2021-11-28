const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const PORT = 3001;
const db = require("./models");
const sequelize = require("sequelize");

const app = express();
const Employee = require('../server/models/')


// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use(cors());


// Routes 
// Default Routes
app.get('/', (req, res) => {
    res.send('Hello World Test')
});


app.get('/test', (req, res) => {
  res.json("This is from the backend")
})


// start the server
db.sequelize.sync().then((req) => {
  app.listen(PORT, function () {
    console.log("Sever running on", PORT);
  });
});

app.get("/all", async (req, res, next ) => {
  const getAllEmployees = await Employee.findAll();
  getAllEmployees ? res.status(200).send(getAllEmployees) : res.status(404).send({error: "No Data found"})
})



// Employee Route
const employeeRouter = require("../server/routes/employees");
app.use("/api/employee", employeeRouter);




// })
