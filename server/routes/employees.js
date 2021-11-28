
const express = require('express');
const router = express.Router();
const {Employees} = require("../models");
const sequelize = require("sequelize");
const cors = require("cors");
const e = require('express');
const client = 'http://localhost:3000';



router.use(express.json());
router.use(
  cors({
    origin: [client],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//Route to add an Employee
router.post("/add", async (req, res, next) => {
    const { employee_name, employee_id, employee_phone } = req.body;
    const employeeExist = await Employees.findOne({
        where: {
        employee_id: employee_id,
    },
    });

    if (!employeeExist){
        const addEmployee = await Employees.create( {
            employee_name : employee_name,
            employee_id: employee_id,
            employee_phone: employee_phone,
        });
        addEmployee ? res.status(200).send({'Message': 'Successfully Added'}) : res.json(404).send ({ error: "There was an error"});  
    } else{
        res.status(404).send({ error: `Employee with the employee ID ${employee_id} already exists`}); 
    }  
});

// Route to Read all Employees
router.get("/all", async (req, res, next ) => {
    const getAllEmployees = await Employees.findAll();
    getAllEmployees ? res.status(200).send(getAllEmployees) : res.status(404).send({error: "No Data found"})
})


module.exports = router;