const myButtonPlus = document.querySelector('#buttonPlus');
const myButtonMinus = document.querySelector('#buttonMinus');
const sk = document.querySelector('#toVoteCount');
const skGDB = document.querySelector('#toVoteCountGDB');
const primary = document.getElementById('btn2');
const slNicName = document.querySelector('#slideNicName');
const slImg = document.querySelector('#slideImg');
const slAboutMe = document.querySelector('#aboutMe');
const userNameVote = document.getElementById("userNameVote");
const passwordVote = document.getElementById("passwordVote");

let k = null;

function createEmployeeJSfunc(kK, toVoteCountJsK, elementidK, userNameVoteJsK, passwordVoteJsK) {
    const urlEmployeeCreate =`http://localhost:8091/addEmployee`;
    const createEmployeeBody = `{"empId":"${kK}", "numberOfPoints":"${toVoteCountJsK}", "users":{"id":"${elementidK}", "userName":"${userNameVoteJsK}", "password":"${passwordVoteJsK}"}}`;
    fetch(urlEmployeeCreate, {
        method: 'POST',
        body:createEmployeeBody,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(text => console.log(text))
    .catch(error => console.log(error));
}


//  --- slaidas kiekvienam pasirinktam darbuotojui
function getMyIfno(evt) {
    // loginList & urlList
    const urlFromClick = evt.target.src

    // -> apsauga -> tik paspaudus ant nuotraukos bus nuskaitomas src -> pirma šios funkcijos eilutė
    if (urlFromClick != undefined) {
        let loginFromList;

        let i = 0
        urlList.forEach(element => {
            if (element == urlFromClick) {
                loginFromList = loginList[i];
                k = i;      
            }
            i++;
        });
    
        // --- bendro balsu sk apskaičiavimas bei užkrovimas
        let sumSk = 0;
        listOfEmployees.forEach(elem => {
            if (k == elem.empId) {
                sumSk = sumSk + elem.numberOfPoints;
            }
        });
        skGDB.textContent = 100 + Number(sumSk);
    
        // -> gautų duomenų sudėdjimas bei paslėpto slaidų mygtuko paspaudimas
        slNicName.textContent = loginFromList;
        slImg.src = urlFromClick;
        slAboutMe.textContent = `Esu draugiškas bei noriu Tau padėti. Parašyk man → ${loginFromList}@pagalbis.lt`;
        primary.click()
    }
  }

const pDiv = document.querySelector('#output');
pDiv.addEventListener('click', getMyIfno);

// --- balsu pridejimas/atemimas
myButtonPlus.addEventListener('click', () => {
    sk.textContent = Number(sk.textContent) + 1;
    skGDB.textContent = Number(skGDB.textContent) + 1;
});

myButtonMinus.addEventListener('click', () => {
    sk.textContent = Number(sk.textContent) - 1;
    skGDB.textContent = Number(skGDB.textContent) - 1;
});

// --- balsavimo išsaugojimas
document.querySelector('#userVoteButton').addEventListener('click', ()=>{
    const toVoteCountJs = sk.textContent;
    const userNameVoteJs = userNameVote.value;
    const passwordVoteJs = passwordVote.value;

    if (userNameVoteJs != "" && passwordVoteJs != "" && toVoteCountJs != 0) {
        listOfusers.forEach(element => {
            if (element.userName == userNameVoteJs && 
            element.password == passwordVoteJs) {
                createEmployeeJSfunc(k, toVoteCountJs, element.id, userNameVoteJs, passwordVoteJs);
            }
        });
    }
    closeNavInform();
});