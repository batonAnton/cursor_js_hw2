let firstNum = prompt("Введіть перше число: ");
let secondNum;
const evenNum = firstNum % 2 === 0;
const intCheck =Number.isInteger(firstNum);
const moreZero = firstNum<=0;


    debugger;
    
   
 while(!(evenNum || intCheck|| moreZero)){
    debugger;
    
    alert("Введіть правильне число ");
    
    firstNum = prompt("Введіть перше число: ");
    
    
    
    
} 
function isNumeric(firstNum){
    return !isNaN(firstNum)
    debugger;

  }
  isNumeric(firstNum);
    // if(moreZero){
    // alert('Більше ніж 0 потрібно');
    // firstNum = prompt("Введіть перше число: ");
    // console.log({firstNum});
    // debugger;

    


