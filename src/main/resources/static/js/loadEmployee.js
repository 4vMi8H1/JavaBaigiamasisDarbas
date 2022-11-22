const ENDPOINT = 'https://api.github.com/users';

function getData() {
    fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => showData(data))
        .catch(error => console.log(error));
};

const loginList = [];
const urlList = [];

function showData(data) {
    const pDiv = document.querySelector('#output');

    Object.assign(pDiv.style, {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1em',
    });

    data.forEach(element => {
        const div = document.createElement('div');
        const loginTxt = document.createElement('p');
        const img = document.createElement('img');

        loginTxt.textContent = element.login;
        img.src = element.avatar_url;

        loginList.push(element.login);
        urlList.push(element.avatar_url);

        Object.assign(div.style, {
            display: 'grid',
            justifyItems: 'center',
            textAlign: 'center',
            backgroundColor: 'black',
            borderRadius: '5%',
            width: '10em',
        });

        Object.assign(loginTxt.style, {
            color: 'white',
            padding: '0.1em',
            margin: '0px',
        });

        Object.assign(img.style, {
            width: '10em',
            borderRadius: '50%',
            padding: '0.5em',
        });

        div.append(loginTxt, img)
        pDiv.append(div)
    });
};

window.addEventListener("load", getData);
