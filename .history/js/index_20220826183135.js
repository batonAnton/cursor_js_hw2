let firstNum = prompt("Введіть перше число: ");
let secondNum;
const evenNum = firstNum % 2 !==0;
const intCheck =Number.isInteger(parseInt(firstNum));

do{
    console.log(firstNum);
} while(evenNum && intCheck){
    alert("Введіть парне число");
    debugger;
}