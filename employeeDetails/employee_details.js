const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
];

function displayEmployees(){

    const totalEmployees = employees.map(totalEmployeesDetails)

    function totalEmployeesDetails(employee){
        return `<p> ${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary}</p>`;
    }

    document.getElementById('employeesDetails').innerHTML = totalEmployees.join('');

}

function calculateTotalSalaries(){

    const totalSalaries = employees.reduce(totalEmployeesSalaries, 0);

    function totalEmployeesSalaries (total, employee){
        return total += employee.salary;
    }

    document.getElementById('employeesDetails').innerHTML = `<p> Total Salaries is $${totalSalaries}</p>`;

}

function displayHREmployees(){

    const HREmployees = employees.filter(findHREmployees);

    function findHREmployees(employee){
        return employee.department == "HR"; 
    }

    const HREmployeesDisplay = HREmployees.map(displayHR);

    function displayHR(employee){
        return `<p> ${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary} </p>`;
    }

    document.getElementById('employeesDetails').innerHTML = HREmployeesDisplay;
    
}

function findEmployeeById(){
    const employeeIdInput = prompt('Please enter the Id');
    
    const employeeId = parseFloat(employeeIdInput);

    const foundEmployee = employees.find(findEmployee);

    function findEmployee (employee){
        return employee.id === employeeId;
    }

    console.log (foundEmployee);

    if (foundEmployee){
        document.getElementById('employeesDetails').innerHTML = `<p> ${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDetails').innerHTML = `<p>no employee has been found with this ID`;
    }
}

function addEmployee(){

    let newEmployee = {
        id : employees.length + 1,
        name : prompt(`Enter employee's name`),
        age : prompt(`Enter employee's age`),
        department : prompt(`Enter employee's department`),
        salary : prompt(`Enter employee's salary`)
    };

    employees.push(newEmployee);

}