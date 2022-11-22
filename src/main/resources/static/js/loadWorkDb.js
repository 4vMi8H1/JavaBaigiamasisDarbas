const urlUsersDetails ='http://localhost:8091/usersDetails';
const listOfUsersDetails = [];
fetch(urlUsersDetails, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        listOfUsersDetails.push(element);
    });
})
.catch(error => console.log(error));

// ---

const urlUsers ='http://localhost:8091/users';
const listOfusers = [];
fetch(urlUsers, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        listOfusers.push(element);
    });
})
.catch(error => console.log(error));

// ---

const urlEmployees ='http://localhost:8091/Employees';
const listOfEmployees = [];
fetch(urlEmployees, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    data.forEach(element => {
        listOfEmployees.push(element);
    });
})
.catch(error => console.log(error));
