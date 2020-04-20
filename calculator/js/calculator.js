   
   var n1 = document.getElementById("number1");
    var n2 = document.getElementById("number2");

    var n3 = document.getElementById("result");


   
       
function multiplyNum() {   
 let num = parseInt(n1.value);
  let mum = parseInt(n2.value);
    n3.innerHTML = (num * mum)
}

function addNum() {
    let nam = parseInt(n1.value);
    let man = parseInt(n2.value);
    n3.innerHTML = (nam + man)
}

function subtractNum() {
    let num = parseInt(n1.value);
    let mum = parseInt(n2.value); 
    n3.innerHTML = (num - mum)
}

function divideNum() {
    let num = parseInt(n1.value);
    let mum = parseInt(n2.value);
    n3.innerHTML = (num / mum)
}

function remainderNum() {
    let num = parseInt(n1.value);
    let mum = parseInt(n2.value);
    n3.innerHTML = (num % mum)
} 

function simplify(){
    let mem = parseInt(n4.value);
    let ben = parseInt(n5.value);
    let ban = parseInt(n6.value);
    n7.innerHTML = (simplify ax&#178 + bx c);
    
}