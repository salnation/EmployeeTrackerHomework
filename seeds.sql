INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Medical"), ("Legal"),('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 80000, 1), /* 1 */
         ("Salesperson", 60000, 1), /* 2 */
         ("Head Surgeon", 150000, 3), /* 3 */
         ("Software Engineer", 110000, 2), /* 4 */
         ("Accountant", 115000, 1), /* 5 */
         ("Lawyer", 190000, 4), /* 6 */
         ("Pharmacist", 130000, 3), /* 7 */
        ("Human Resources Director", 1650000, 5), /* 8 */
        ("Human Resources Associate", 75000, 5); /* 9 */

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Green", 3, null), 
        ("Matthew", "Goode", 1, null),
        ("Amy", "Reefer", 6, null),
        ("Joanne", "LeCroix", 4, null),
        ("Charles", "Vocans", 2, null),
        ("Chris", "Brown", 7, null), 
        ("Sousan", "Sanders", 5, null), 
        ("Samuel", "Vickers", 8, null), 
        ("Krystal", "Plantiff", 9, null); 