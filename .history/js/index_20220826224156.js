let firstNum = prompt("Введіть перше число: ");
let secondNum;
const evenNum = firstNum % 1 !== 0;
const intCheck =Number.isInteger(parseInt(firstNum));
const moreZero = firstNum<=0;


   
 while(evenNum && intCheck){
    
    alert("Введіть ціле число ");
    
    firstNum = prompt("Введіть перше число: ");
    debugger;

    
    
    
} 
if(moreZero){
    alert('Більше ніж 0 потрібно');
    firstNum = prompt("Введіть перше число: ");
    console.log({firstNum});
}
