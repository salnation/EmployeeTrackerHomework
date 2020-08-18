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
                "View employees",
                "View departments",
                "View roles",
                "Add employee",
                "Add department",
                "Add a role",
                "Exit"
        ]

    // next to create a switch with several cases matching the choices above

}).then(function (answer) {
    switch (answer.action) {
        case "View employees":
            viewEmployees();
            break;
        case "View departments":
            viewDepartments();
            break;
        case "View roles":
            viewRoles();
            break;
        case "Add employee":
            addEmployee();
            break;
        case "Add department":
            addDepartment();
            break;
        case "Add a role":
            addRole();
            break;
        case "Exit": 
            endApp();
            break;
        default:
            break;
    }
})
}
