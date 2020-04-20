const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const output = document.getElementById("output");

const btn = document.getElementById("btn");

btn.addEventListener("click", calculatePizza);

function calculatePizza(e){
    e.preventDefault();
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let num3 = parseInt(input3.value);
    let num4 = parseInt(input4.value);

    let order1 = num1 * 1;
    let order2 = num2 * 2;
    let order3 = num3 * 3;
    let order4 = num4 * 4;

    let totalOrder = order1 + order2 + order3 + order4;
    console.log(totalOrder) 

      let order = totalOrder;
    if(order <= 4)
    {
        console.log("Small: Z of Pizza");
    } else if(order > 4 && order <= 6)
    {
        console.log("Medium:Y of Pizza");
    } else
    { 
        if( order >6 && order < 8)
        {
            console.log("Large: X of Pizza");
        }
        if (order >= 8)
        {
          if(order % 8 == 0)
          {
              let b = order / 8;
              console.log(`Buy ${b}X of Pizza`);
          }  
          if(order % 8 == 7)
          {
              let b = order / 8;
              console.log(`Buy ${b +1}X of Pizza`);
          }
          if(order % 8 >= 5 && order % 8<=6)
          {
              let b= order/8;
              let a = Math.floor(b);
              let c = Math.ceil(b);
              let e = c - a;
              console.log(`Buy${a}X and ${e}Y`);
          }

          if(order % 8 < 5 && order % 8 > 0)
          {
              let b= order/8;
              let a = Math.floor(b);
              let c = Math.ceil(b);
              let e = c - a;
              output.innerText = `Buy${a}X and ${e}Z of Pizza`;
              console.log(`Buy${a}X and ${e}Z of Pizza`);
          }
        }


    }



    
}
 
