const txtTarget = document.querySelector("#txtInput")
const txtTarget = document.querySelector("#txtTarget2")
alert("hello")

function getDateFormat() {
    let targetString = txtInput.value;

    let targetString = txtTarget2.value;

    let pattern = new RegExp(txtInputString, "[0-3]{dd/mm/yy}");

    if (pattern.test(txtInputString)) {
        display.innerHTML = "Correct";
       
    }  else {
            display.innerHTML = "Please use the format {dd/dd/yy} ";
        }
}
