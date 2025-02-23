// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const empTable = document.getElementById('employees');
const empCount = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeCount = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    e.preventDefault(); // PREVENT FORM SUBMISSION
    
    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const row = empTable.insertRow();
    
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    row.insertCell(0).appendChild(document.createTextNode(id));
    row.insertCell(1).appendChild(document.createTextNode(name));
    row.insertCell(2).appendChild(document.createTextNode(extension));
    row.insertCell(3).appendChild(document.createTextNode(email));
    row.insertCell(4).appendChild(document.createTextNode(department));
    
    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    row.insertCell(5).appendChild(deleteBtn);
    
    // RESET THE FORM
    form.reset();
    
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
    
    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    employeeCount++;
    empCount.textContent = employeeCount;
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            const row = e.target.parentElement.parentElement;
            row.remove();
            employeeCount--;
            empCount.textContent = employeeCount;
        }
    }
});
