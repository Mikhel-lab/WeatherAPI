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
        output.innerText = `Small Pizzas:  `
        // console.log("Small Pizzas: Z of Pizza");
    } else if(order > 4 && order <= 6)
    {
        output.innerText = `Medium Pizzas: `
        // console.log("Medium Pizzas:Y of Pizza");
    } else
    { 
        if( order >6 && order < 8)
        {
            output.innerText = `Large Pizzas: `
            // console.log("Large Pizzas: X of Pizza");
        }
        if (order >= 8)
        {
          if(order % 8 == 0)
          {
              let i = order / 8;
              output.innerText = `Large Pizzas: ${i} `
             
            //   console.log(`Buy Large Pizzas: ${i}X of Pizza`);
          }  
          if(order % 8 == 7)
          {
              let i = order / 8;
              let t = Math.floor(i);
              output.innerText = `Large Pizza: ${t +1} `;
            //   console.log(`Buy Large Pizza ${t +1}X of Pizza`);
          }
          if(order % 8 >= 5 && order % 8<=6)
          {
              let i= order/8;
              let j = Math.floor(i);
              let k = Math.ceil(i);
              let n = k - j;
              output.innerText = ` ${j} Large Pizzas and  ${n}  Medium Pizzas`;
              // console.log(`Buy  ${j} and  Medium Pizzas: ${n}`);
          }

          if(order % 8 < 5 && order % 8 > 0)
          {
              let i= order/8;
              let j = Math.floor(i);
              let k = Math.ceil(i);
              let n = k - j;
              output.innerText = `${j} Large Pizzas and   ${n} Small Pizzas `;
            //   console.log(`Buy Large Pizzas: ${j}X and   
            //     Small Pizzas: ${n}Z of Pizza`);
          }
        }


    }



    
}
 
