


let Password = document.getElementById("Password");
let count = document.getElementById("count");


let bar = document.getElementById("bar");
let loBtn = document.getElementById("loBtn");
let upBtn = document.getElementById("upBtn");
let numBtn = document.getElementById("numBtn");
let symBtn = document.getElementById("symBtn");
let gen = document.getElementById("gen");

//console.log(gen)
const alphalo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphaup = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']', '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '/', '?'];
const numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let barvalue;
const mainarr = [alphalo, alphaup, symbols];
count.textContent = bar.value;
barvalue = bar.value;
//console.log(barvalue);
bar.addEventListener('input', function () {
    count.textContent = bar.value;
    barvalue = bar.value;

});
let varpass = "";
let varpass2 = "";
let varpass3 = "";
let varpass4 = "";
gen.addEventListener('click', function () {
    if (loBtn.checked && !upBtn.checked && !numBtn.checked && !symBtn.checked) {
        varpass = getlo();

    } else if (!loBtn.checked && upBtn.checked && !numBtn.checked && !symBtn.checked) {
        varpass = getup();

    } else if (!loBtn.checked && !upBtn.checked && numBtn.checked && !symBtn.checked) {
        varpass = getnum();

    } else if (!loBtn.checked && !upBtn.checked && !numBtn.checked && symBtn.checked) {
        varpass = getsym();

    }
    else if (!loBtn.checked && !upBtn.checked && !numBtn.checked && !symBtn.checked) {
        // All are false
        alert("click the box");

    }









    else if (!loBtn.checked && upBtn.checked && !numBtn.checked && symBtn.checked) {
        // loBtn=false, upBtn=true, numBtn=false, symBtn=true
        varpass = getup();
        varpass = varpass.slice(varpass.length / 2, varpass.length);
        varpass2 = getsym();
        varpass2 = varpass2.slice(varpass2.length / 2, varpass2.length);
        varpass += varpass2;

    }

    else if (!loBtn.checked && upBtn.checked && numBtn.checked && !symBtn.checked) {
        // loBtn=false, upBtn=true, numBtn=true, symBtn=false
        varpass = getup();
        varpass = varpass.slice(varpass.length / 2, varpass.length);
        varpass2 = getnum();
        varpass2 = varpass2.slice(varpass2.length / 2, varpass2.length);
        varpass += varpass2;

    }

    else if (!loBtn.checked && upBtn.checked && numBtn.checked && symBtn.checked) {
        // loBtn=false, upBtn=true, numBtn=true, symBtn=tru
        varpass = getup();
        varpass = varpass.slice(varpass.length / 3, varpass.length);
        varpass2 = getnum();
        varpass2 = varpass2.slice(varpass2.length / 3, varpass2.length);
        varpass += varpass2;
        varpass3 = getsym();
        varpass3 = varpass3.slice(varpass3.length / 3, varpass3.length);
        varpass += varpass3

    }


    else if (loBtn.checked && !upBtn.checked && !numBtn.checked && symBtn.checked) {
        // loBtn=true, upBtn=false, numBtn=false, symBtn=true
        varpass = getlo();
        varpass = varpass.slice(varpass.length / 2, varpass.length);
        varpass2 = getsym();
        varpass2 = varpass2.slice(varpass2.length / 2, varpass2.length);
        varpass += varpass2;

    }

    else if (loBtn.checked && !upBtn.checked && numBtn.checked && !symBtn.checked) {
        // loBtn=true, upBtn=false, numBtn=true, symBtn=false
        varpass = getlo();
        varpass = varpass.slice(varpass.length / 2, varpass.length);
        varpass2 = getnum();
        varpass2 = varpass2.slice(varpass2.length / 2, varpass2.length);
        varpass += varpass2;

    }

    else if (loBtn.checked && !upBtn.checked && numBtn.checked && symBtn.checked){
        // loBtn=true, upBtn=false, numBtn=true, symBtn=true
        varpass = getlo();
    varpass = varpass.slice(varpass.length / 3, varpass.length);
    varpass2 = getnum();
    varpass2 = varpass2.slice(varpass2.length / 3, varpass2.length);
    varpass += varpass2;
    varpass3 = getsym();
    varpass3 = varpass3.slice(varpass3.length / 3, varpass3.length);
        varpass += varpass}



    else if (loBtn.checked && upBtn.checked && !numBtn.checked && !symBtn.checked) {
        // loBtn=true, upBtn=true, numBtn=false, symBtn=false
        varpass = getlo();
        varpass = varpass.slice(varpass.length / 2, varpass.length);
        varpass2 = getup();
        varpass2 = varpass2.slice(varpass2.length / 2, varpass2.length);
        varpass += varpass2;


    }

    else if (loBtn.checked && upBtn.checked && !numBtn.checked && symBtn.checked) {
        // loBtn=true, upBtn=true, numBtn=false, symBtn=true
        varpass = getlo();
        varpass = varpass.slice(varpass.length / 3, varpass.length);
        varpass2 = getup();
        varpass2 = varpass2.slice(varpass2.length / 3, varpass2.length);
        varpass += varpass2;
        varpass3 = getsym();
        varpass3 = varpass3.slice(varpass3.length / 3, varpass3.length);
        varpass += varpass3

    }

    else if (loBtn.checked && upBtn.checked && numBtn.checked && !symBtn.checked) {
        // loBtn=true, upBtn=true, numBtn=true, symBtn=false
        varpass = getlo();
        varpass = varpass.slice(varpass.length / 3, varpass.length);
        varpass2 = getup();
        varpass2 = varpass2.slice(varpass2.length / 3, varpass2.length);
        varpass += varpass2;
        varpass3 = getnum();
        varpass3 = varpass3.slice(varpass3.length / 3, varpass3.length);
        varpass += varpass3

    }
    else if (loBtn.checked && upBtn.checked && numBtn.checked && symBtn.checked) {
        // loBtn=true, upBtn=true, numBtn=true, symBtn=true
        console.log("hi");
        varpass = getlo();
        varpass = varpass.slice(varpass.length / 4, varpass.length);
        varpass2 = getnum();
        varpass2 = varpass2.slice(varpass2.length / 4, varpass2.length);
        varpass += varpass2;
        varpass3 = getsym();
        varpass3 = varpass3.slice(varpass3.length / 4, varpass3.length);
        varpass += varpass3
        varpass4 = getup();
        varpass4 = varpass4.slice(varpass4.length / 4, varpass4.length);
        varpass += varpass4;

    }
    console.log(varpass);
    varpass = shuffle(varpass);
    console.log(varpass);
    if (varpass.length != barvalue) {
        varpass = varpass.slice(0, barvalue);
    }
    console.log(varpass);
    Password.textContent = varpass;
});
function shuffle(str) {
    return str.split('').sort(() => 0.5 - Math.random()).join('');
}
function getlo() {
    let pass = "";
    for (let i = 0; i < barvalue; i++) {
        let raan = Math.floor(Math.random() * alphalo.length);
        pass += alphalo[raan];
    }
    return pass;

}
function getup() {
    let pass = "";
    for (let i = 0; i < barvalue; i++) {
        let raan = Math.floor(Math.random() * alphaup.length);
        pass += alphaup[raan];
    }
    return pass;

}
function getnum() {
    let pass = "";
    for (let i = 0; i < barvalue; i++) {
        let raan = Math.floor(Math.random() * numberChars.length);
        pass += numberChars[raan];
    }
    return pass;

}
function getsym() {
    let pass = "";
    for (let i = 0; i < barvalue; i++) {
        let raan = Math.floor(Math.random() * symbols.length);
        pass += symbols[raan];
    }
    return pass;

}






