function createUserJSfunc(createNameJs, createLastNameJs, 
    createUserNameJs, createPasswordNameJs) {
    const urlUserCreate =`http://localhost:8091/addUserDetails`;
    const createUserBody = `{"name":"${createNameJs}", "lastName":"${createLastNameJs}", "users":{"userName":"${createUserNameJs}", "password":"${createPasswordNameJs}"}}`;
    fetch(urlUserCreate, {
        method: 'POST',
        body:createUserBody,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(error => console.log(error));
}

function deleteUserJSfunc(id) {
    const urlUserDelete =`http://localhost:8091/user/${id}`;
    fetch(urlUserDelete, {
        method: 'DELETE',
    })
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.log(error));
}

function updateUserJSfunc(elementId, updateUserNameNewJs, updatePasswordNewJs) {
    const urlUserUpdate =`http://localhost:8091/updateUser`;
    const updateUserBody = `{"id":"${elementId}", "userName":"${updateUserNameNewJs}", "password":"${updatePasswordNewJs}"}`;
    fetch(urlUserUpdate, {
        method: 'PUT',
        body:updateUserBody,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(error => console.log(error));
}

// --- vartotojo create
document.querySelector('.userCreateButton').addEventListener('click', ()=>{
    const createNameJs = document.getElementById("nameCreate").value;
    const createLastNameJs = document.getElementById("lastNameCreate").value;
    const createUserNameJs = document.getElementById("userNameCreate").value;
    const createPasswordNameJs = document.getElementById("passwordCreate").value;

    let noMatterNumber = 0;

    if (createNameJs != "" && createLastNameJs != "" && 
    createUserNameJs != "" && createPasswordNameJs != "") {
        listOfusers.forEach(element => {
            if (element.userName == createUserNameJs) {
                noMatterNumber = 1;
            }
        });

        if (noMatterNumber == 0) {
            createUserJSfunc(createNameJs, createLastNameJs, 
                createUserNameJs, createPasswordNameJs);
        } else {
            console.log("Įvestas slapyvardis jau egzistuoja");
        }
    }
    closeNavUzsiregistruoti();
    window.location.reload(); 
});

// --- vartotojo delete
document.querySelector('#userDeleteButton').addEventListener('click', ()=>{

    const deleteUserNameJs = document.getElementById("nameDelete").value;
    const deletePasswordJs = document.getElementById("passwordDelete").value;

    if (deleteUserNameJs != "" && deletePasswordJs != "") {
        listOfusers.forEach(element => {
            if (element.userName == deleteUserNameJs && 
            element.password == deletePasswordJs) {
                deleteUserJSfunc(element.id);
            }
        });
    }
    closeNavIssiregistruoti();
    window.location.reload(); 
});

// --- vartotojo update
document.querySelector('#userUpdateButton').addEventListener('click', ()=>{

    const updateUserNameOldJs = document.getElementById("userNameUpdateOld").value;
    const updatePassworOlddJs = document.getElementById("passwordUpdateOld").value;
    const updateUserNameNewJs = document.getElementById("userNameUpdateNew").value;
    const updatePasswordNewJs = document.getElementById("passwordUpdateNew").value;

    if (updateUserNameOldJs != "" && updatePassworOlddJs != "" && 
    updateUserNameNewJs != "" && updatePasswordNewJs != "") {
        listOfusers.forEach(element => {
            if (element.userName == updateUserNameOldJs && 
            element.password == updatePassworOlddJs) {
                updateUserJSfunc(element.id, updateUserNameNewJs, updatePasswordNewJs);
                console.log("ok");
            }
        });
    }
    closeNavAtnaujinti();
    window.location.reload(); 
});
