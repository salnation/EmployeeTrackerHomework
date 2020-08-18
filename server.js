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