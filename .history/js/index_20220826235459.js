let firstNum = prompt("Введіть перше число: ");
let evenNum = firstNum % 1 == 0;
let intCheck = Number.isInteger(firstNum);
let moreZero = firstNum < 0;


    debugger;
    
//    while(!(firstNum % 1 == 0 || Number.isInteger(firstNum)||firstNum < 0 )){
 while(!(evenNum || intCheck|| moreZero)){
    
    alert("Введіть правильне число ");
    
    firstNum = +prompt("Введіть перше число: ");
    console.log('firstNum');
} 
function isNumeric(firstNum){
    return !isNaN(firstNum)
    debugger;

  }
  isNumeric(firstNum);
   

//     let minNumber = Number(prompt("Введіть ціле додатнє число M, з якого починається сумування",));
//     debugger;    

// while (!(minNumber % 1 == 0) || (minNumber == "") || (minNumber < 0)) {
//     alert("Ви ввели число, яке не задовільняє умову");

//     minNumber = +prompt("Введіть ціле додатнє число M, з якого починається сумування",);
    

// }


