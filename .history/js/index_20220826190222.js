let firstNum = prompt("Введіть перше число: ");
let secondNum;
const evenNum = firstNum % 2 === 0;
const intCheck =Number.isInteger(parseInt(firstNum));
const moreZero = firstNum<=0;

do{
    
    
    debugger;
    if(moreZero){
        alert('Більше ніж 0 потрібно');
    }
    console.log({firstNum});
}
   
 while((evenNum && intCheck) ){
    debugger;
    alert("Введіть ціле число число");
    debugger;
    firstNum = prompt("Введіть перше число: ");
    
} 
