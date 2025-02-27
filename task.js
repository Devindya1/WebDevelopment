var input1 = 0, input2 = 0, input3 = 0, total1 = 0;
var selectedValue = 0;

function calculate() {
    selectedValue = document.getElementById('method').value;
    setInputs();

    if (selectedValue == 1) {
        add();
    } else if (selectedValue == 2) {
        sub();
    } else if (selectedValue == 3) {
        div();
    } else if (selectedValue == 4) {
        mul();
    }

    document.getElementById('answer').value = total1;
}

function setInputs() {
    input1 = parseFloat(document.getElementById('input1').value) || 0;
    input2 = parseFloat(document.getElementById('input2').value) || 0;
    input3 = parseFloat(document.getElementById('input3').value) || 0;
}

function add() {
    total1 = input1 + input2 + input3;
    document.getElementById('div1').style.backgroundColor = "green";
}

function sub() {
    total1 = input1 - input2 - input3;
    document.getElementById('div1').style.backgroundColor = "green";
}

function mul() {
    total1 = input1 * input2 * input3;
    document.getElementById('div1').style.backgroundColor = "green";
}

function div() {
    if (input2 === 0 || input3 === 0) {
        document.getElementById('div1').style.backgroundColor = "red";
        alert("You can't divide by zero");
        total1 = "Error";
        return;
    }
    total1 = input1 / input2 / input3;
    document.getElementById('div1').style.backgroundColor = "green";
}

function reset() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('input3').value = '';
    document.getElementById('answer').value = '';
    document.getElementById('div1').style.backgroundColor = "white";
}
