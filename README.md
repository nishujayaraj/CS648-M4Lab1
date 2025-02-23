# Employee Management System

## Description
This simple Employee Management System allows users to add employees to a table and manage the employee list by deleting entries. The system tracks the number of employees and dynamically updates the count displayed next to the employee list header.

## Features
- Add new employees with ID, Name, Extension, Email, and Department.
- Automatically displays the added employee in a table.
- Each employee entry includes a "Delete" button to remove them from the list.
- Employee count is updated after each addition or deletion.

## How It Works
1. **Add Employee**: 
   - Fill in the form with employee details and submit.
   - The employee is added to the table, and the count is incremented.
   
2. **Delete Employee**: 
   - Click the "Delete" button next to an employee row.
   - Confirm deletion, and the employee is removed from the table, with the count decremented.

## Files
- `index.html`: Contains the HTML structure for the form and table.
- `script.js`: Manages the functionality for adding and deleting employees, and updating the employee count.
