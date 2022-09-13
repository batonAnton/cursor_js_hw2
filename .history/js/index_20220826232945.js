// let firstNum = prompt("Введіть перше число: ");
// let secondNum;
// const evenNum = firstNum % 1 == 0;
// const intCheck =Number.isInteger(firstNum);
// const moreZero = firstNum<0;


//     debugger;
    
   
//  while(!evenNum || !intCheck|| !moreZero){
    
//     alert("Введіть правильне число ");
    
//     firstNum = +prompt("Введіть перше число: ");
//     console.log('firstNum');
// } 
// function isNumeric(firstNum){
//     return !isNaN(firstNum)
//     debugger;

//   }
//   isNumeric(firstNum);
   

    let minNumber = Number(prompt("Введіть ціле додатнє число M, з якого починається сумування",));
while (!(minNumber % 1 == 0) || (minNumber == "") || (minNumber < 0)) {
    alert("Ви ввели число, яке не задовільняє умову");
    debugger;    

    minNumber = +prompt("Введіть ціле додатнє число M, з якого починається сумування",);
}


