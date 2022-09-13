let firstNum = prompt("Введіть перше число: ");
const intCheck = firstNum % 1 === 0;
const moreZero = firstNum < 0;
const numCheck1 = firstNum == "" ;


if( (firstNum <= 0 || firstNum == "" )){
    alert("Введіть правильне значення ");  
    
        firstNum = +prompt("Введіть число ступені: ");
        console.log({firstNum});
    

} 

let secondNum = prompt("Введіть число ступені : ");
if( secondNum <= 0 || secondNum == "" ){
    alert("Введіть правильне значення ");  
    
        secondNum = +prompt("Введіть число ступені: ");
        console.log({secondNum});
    

} 
while(secondNum <= firstNum){
        alert("степінь повинна бути більшою за число");
        secondNum = +prompt("Введіть число ступені: ");
        console.log(secondNum);
    }

// let evenCheck = confirm("пропускати парні числа?");
let res = 0;
// if(evenCheck){
//     for (let i = firstNum; i <= secondNum; i++){
//        const evenCheck1 = i % 2 == 0; 
//        if(!evenCheck1){
//         res += i;
//        }
//      }
//     } else {
//         for (let i = firstNum; i <= secondNum; i++){
//             res += i;
//        }
        
//     }
//     for (let i = firstNum; i <= secondNum; i++){
//         res += i;
//    }
    
for (let i = firstNum; i <= secondNum; i++) {
    res += i;
}
    
document.writeln(`Сума всіх цифр становить: ${res}`);


// let minNumber = Number(prompt("Введіть ціле додатнє число M, з якого починається сумування",));
// while (!(minNumber % 1 == 0) || (minNumber == "") || (minNumber < 0)) {
//     alert("Ви ввели число, яке не задовільняє умову");
//     minNumber = +prompt("Введіть ціле додатнє число M, з якого починається сумування",);
// }
// let maxNumber = +prompt("Введіть ціле додатнє число N, яким закінчується сумування",);
// while (!(maxNumber % 1 == 0) || (maxNumber == "") || (maxNumber < 0)) {
//     alert("Ви ввели число, яке не задовільняє умову");
//     maxNumber = +prompt("Введіть ціле додатнє число N, яким закінчується сумування",);
  
// }
// while (minNumber > maxNumber) {
//     alert('Не можливо зсдійснити сумування. Перше число має бути меншим ніж друге число.');
//     minNumber = +prompt("Введіть ціле додатнє число M, з якого починається сумування",);
//     maxNumber = +prompt("Введіть ціле додатнє число N, яким закінчується сумування",);  
// }

// let sumNumbers = 0;

// if (confirm('Чи потрібно пропускати парні числа?')) {
//     for (let i = minNumber; i <= maxNumber; i++) {
//     if (!(i % 2 == 0)) {
//         sumNumbers += i;
//     }
//     }
// } else {
//        for (let i = minNumber; i <= maxNumber; i++) {
//         sumNumbers += i;
//     }
// }; 
// for (let i = minNumber; i <= maxNumber; i++) {
//             sumNumbers += i;
//         }

// document.writeln(`Сума всіх цифр становить: ${sumNumbers}`);


