let value = 0; 

function addOne() {
    value += 1;
    document.getElementById("value").innerHTML = value;
}

function minusOne() {
    value -= 1;
    document.getElementById("value").innerHTML = value;
}

function resetValue() {
    value = 0;
    document.getElementById("value").innerHTML = value;
}