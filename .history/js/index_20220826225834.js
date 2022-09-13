let firstNum = prompt("Введіть перше число: ");
let secondNum;
const evenNum = firstNum % 2 == 0;
const intCheck =Number.isInteger(firstNum);
const moreZero = firstNum<=0;


   
 while(!(evenNum || intCheck|| typeof firstNum==="string")){
    
    alert("Введіть правильне число ");
    
    firstNum = prompt("Введіть перше число: ");
    debugger;

    
    
    
} 
    if(moreZero){
    alert('Більше ніж 0 потрібно');
    firstNum = prompt("Введіть перше число: ");
    console.log({firstNum});
    }


