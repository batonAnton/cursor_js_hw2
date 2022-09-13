let firstNum = prompt("Введіть перше число: ");
let secondNum;
const evenNum = firstNum % 2 ===0;
const intCheck =Number.isInteger(parseInt(firstNum));
const moreZero = firstNum<=0;

do{
    firstNum = prompt("Введіть перше число: ");
    console.log({firstNum});
    debugger;
    if(moreZero){
        alert('Більше ніж 0 потрібно');
    }
}
   
 while((evenNum && intCheck) ){
    debugger;
    alert("Введіть ціле число число");
    debugger;
    firstNum = prompt("Введіть перше число: ");
    
} 
