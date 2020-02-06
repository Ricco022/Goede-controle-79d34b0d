function hoofdstad() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var antw = ["Parijs", "8", "Ijsselmeer"];

    let allGood = true;

    if (input1.value === antw[0]) {
        input1.classList.add('good');
    } else {
        allGood = false;
        input1.classList.add('false');
    }

    if (input2.value === antw[1]) {
        input2.classList.add('good');
    } else {
        allGood = false;
        input2.classList.add('false');
    }

    if (input3.value === antw[2]) {
        input3.classList.add('good');
    } else {
        allGood = false;
        input3.classList.add('false');
    }

    if (allGood){
        document.getElementById("good").innerText = 'Alle antwoorden zijn goed!';
    }
}