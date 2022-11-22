function openNavRegistracija() {
    document.getElementById("myNavRegistracija").style.height = "100%";
}
function closeNavRegistracija() {
    document.getElementById("myNavRegistracija").style.height = "0%";
}


function openNavUzsiregistruoti() {
    closeNavRegistracija();
    document.getElementById("myNavUzsiregistruoti").style.height = "100%";
} 
function closeNavUzsiregistruoti() {
    document.getElementById("nameCreate").value = "";
    document.getElementById("lastNameCreate").value = "";
    document.getElementById("userNameCreate").value = "";
    document.getElementById("passwordCreate").value = "";
    document.getElementById("myNavUzsiregistruoti").style.height = "0%";
}


function openNavAtnaujinti() {
    closeNavRegistracija();
    document.getElementById("myNavAtnaujinti").style.height = "100%";
}
function closeNavAtnaujinti() {
    document.getElementById("userNameUpdateOld").value = "";
    document.getElementById("passwordUpdateOld").value = "";
    document.getElementById("userNameUpdateNew").value = "";
    document.getElementById("passwordUpdateNew").value = "";
    document.getElementById("myNavAtnaujinti").style.height = "0%";
}


function openNavIssiregistruoti() {
    closeNavRegistracija();
    document.getElementById("myNavIssiregistruoti").style.height = "100%";
} 
function closeNavIssiregistruoti() {
    document.getElementById("nameDelete").value = "";
    document.getElementById("passwordDelete").value = "";
    document.getElementById("myNavIssiregistruoti").style.height = "0%";
}


function openNavApie() {
    document.getElementById("myNavApie").style.width = "100%";
}
function closeNavApie() {
    document.getElementById("myNavApie").style.width = "0%";
}


function openNavKontaktai() {
    document.getElementById("myNavKontaktai").style.width = "100%";
} 
function closeNavKontaktai() {
    document.getElementById("myNavKontaktai").style.width = "0%";
}


function openNavInform() {
    document.getElementById("myNavInform").style.width = "100%";
}
function closeNavInform() {
    // document.getElementById("myNavInform").style.width = "0%";
    window.location.reload(); 
}
