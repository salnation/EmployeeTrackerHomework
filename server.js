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

// next to add the functions for each specific case - viewEmployees, viewDepartment and viewRoles

function viewEmployees() {
    var query = "SELECT * FROM employees";
    connection.query(query, function(err, res) {
    if (err) throw err;
    console.log(res.length + " employees found.");
    console.table('All Employees:', res); 
    startApp();
    })
}

function viewDepartments() {
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
    if(err)throw err;
    console.table('All Departments:', res);
    startApp();
    })
}

function viewRoles() {
    var query = "SELECT * FROM role";
    connection.query(query, function(err, res){
    if (err) throw err;
    console.table('All roles:', res);
    startApp();
    })
}

// next will be adding the employee, department, and role 

function addEmployee() {
    connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;

    inquirer
    .prompt([
        {
            name: "first_name",
            type: "input", 
            message: "Enter employee's fist name: ",
        },
        {
            name: "last_name",
            type: "input", 
            message: "Enter employee's last name: "
        },
        {
            name: "role", 
            type: "list",
            choices: function() {
            var roleArray = [];
            for (let i = 0; i < res.length; i++) {
                roleArray.push(res[i].title);
            }
            return roleArray;
            },
            message: "Please enter the role of this employee?"
        }
        ]).then(function (answer) {
            let roleID;
            for (let j = 0; j < res.length; j++) {
            if (res[j].title == answer.role) {
                roleID = res[j].id;
                console.log(roleID)
            }                  
            }  
            connection.query(
            "INSERT INTO employees SET ?",
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: roleID,
            },
            function (err) {
                if (err) throw err;
                console.log("Congratulations! Your employee has been successfully added!");
                startApp();
            }
            )
        })
})
}

function addDepartment() {
    inquirer
    .prompt([
        {
            name: "new_dept", 
            type: "input", 
            message: "Please enter the name of the new department you would like to add?"
        }
    ]).then(function (answer) {
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: answer.new_dept
            }
        );
          var query = "SELECT * FROM department";
        connection.query(query, function(err, res) {
        if(err)throw err;
        console.table('All Departments:', res);
        startApp();
        })
    })
}

function endApp() {
    connection.end();
}