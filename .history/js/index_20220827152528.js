let firstNum = prompt("Введіть перше число: ");
let intCheck = firstNum % 1 == 0;
// let  = Number.isInteger(firstNum);
let moreZero = firstNum <0;
let numCheck1 = firstNum == "" ;


    
    debugger;
   
   


 while(!(moreZero || intCheck || numCheck1 )){
    
    alert("Введіть правильне значення ");  
    debugger
    firstNum = +prompt("Введіть перше число: ");
    console.log(firstNum);
    
} 

// let secondNum = prompt("Введіть число ступені : ");
// let numCheck2 = typeof secondNum !== "num" ;

// while((moreZero || intCheck && numCheck2)){
    
//     alert("Введіть правильне значення ");  
    
//     secondNum = +prompt("Введіть число ступені: ");
//     console.log(secondNum);
// } 
// if(secondNum <= firstNum){
//     alert("степінь повинна бути більшою за число");
//     secondNum = +prompt("Введіть число ступені: ");
//     console.log(secondNum);
// }
// let evenCheck = confirm("пропускати парні числа?");
// let res = 0;
// if(evenCheck){
//     for (let i = firstNum; i <= secondNum; i++){
//        let evenCheck1 = i % 2 == 0; 
//        if(!evenCheck1){
//         res += i;
//        }
//      }
//     } else {
//         for (let i = firstNum; i <= secondNum; i++){
//             res += i;
//         }
//      }

 
    

    


// alert("Результат суми =  " + " " + res);





