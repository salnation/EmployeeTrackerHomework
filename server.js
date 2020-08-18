const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table")

// creating the connection to MYSQL database using MYSQLWorkbench
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "salnation",
    database: "employeeTracker"
})

// connecting to MYSQL server and MYSQL database
connection.connect(function(err){
    if (err) throw err;
    startApp();
})

// utilizing the inquirer npm package 
function startApp() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "Welcome to your new employee database! Please make a selection:",
        choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add an employee",
                "Add department",
                "Add a role",
                "EXIT"
        ]

    // next to create a switch with several cases matching the choices above

    