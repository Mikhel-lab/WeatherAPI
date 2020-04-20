const txtResult = _el("txtResult");
const txtNum1 = _el("txtNum1");
const txtNum2 = _el("txtNum2");
const btn1 = _el("btn1");
const btn2 = _el("btn2");
const btn3 = _el("btn3");
const btn4 = _el("btn4");
const btn5 = _el("btn5");
btn1.addEventListener('click', calculate);
btn2.addEventListener('click', calculate);
btn3.addEventListener('click', calculate);
btn4.addEventListener('click', calculate);
btn5.addEventListener('click', calculate);
// iife declaretion
const calculator = (function(){
//    console.log('hello')
//    let name = 'abayomi unb';
   
//    function displayName(){
//        return name;
//    }
     
//    function add2Num(a,b){
//     return a + b;
// }
  function add(operator,num1, num2) {
    console.log(operator)  
    return num1 + num2;
      
  }
  function sub(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function mulitiply(num1, num2) {
    return num1 * num2;
}
function modulus(num1, num2) {
    return num1 % num2;
}
   return {add,sub,divide,mulitiply,modulus}
})()
// console.log(calculator.add2Num(2,4))
function calculate (e){
    console.log(e.target.value)
    let num1 = parseInt(txtNum1.value) ;
    let num2 = parseInt(txtNum2.value);
  let operator = e.target.value;
    if(operator == "+"){
txtResult.value = calculator.add(operator, num1,num2);
    }else if(operator == '-'){
        txtResult.value = calculator.sub(num1,num2);
    }else if(operator == '*'){
        txtResult.value = calculator.mulitiply(num1,num2);
    }else if(operator == '/'){
        txtResult.value = calculator.divide(num1,num2);
    }else if(operator == '%'){
        txtResult.value = calculator.modulus(num1,num2);
    }
}
// function add (firstNum, secondNum){
//       var result = firstNum + secondNum;
//       return result;
// }
// function sub (firstNum, secondNum){
//       var result = firstNum - secondNum;
//       return result;
// }
// function mulitiply (firstNum, secondNum){
//     var result = firstNum * secondNum;
//     return result;
// }
// function divide (firstNum, secondNum){
//     if(secondNum === 0){
// return "cannot divide"
//     }
//     var result = firstNum / secondNum;
//     return result;
// }
// function modulus (firstNum, secondNum){
//     var result = firstNum % secondNum;
//     return result;
// }
function _el(elementID){
    return document.getElementById(elementID);
}


// function add(firstNum, secondNum) {
// 	var result = firstNum + secondNum;
// 	return result; 
// }

// function sub(firstNum, secondNum) {
// 	var result = firstNum - secondNum;
// 	return result; 
// }

// function multiply(firstNum, secondNum) {
// 	var result = firstNum * secondNum;
// 	return result; 
// }

// function divide	(firstNum, secondNum) {
// 	if (secondNum == 0) {
// 		return "Cannot divide a number by zero";
// 	}
// 	var result = firstNum / secondNum;
// 	return result; 
// }

// function modulus(firstNum, secondNum) {
// 	var result = firstNum % secondNum;
// 	return result; 
// }

