let firstNum = prompt("Введіть перше число: ");
let secondNum;
const evenNum = firstNum % 2 ===0;
const intCheck =Number.isInteger(parseInt(firstNum));
const moreZero = firstNum<=0;

do{
    console.log({firstNum});
    debugger;
}
   
 while(!(evenNum && intCheck) && moreZero ){
    debugger;
    alert("Введіть парне число");
    debugger;
} 