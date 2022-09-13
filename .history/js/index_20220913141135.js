let firstNum = prompt("Введіть перше число: ");
const intCheck = firstNum % 1 === 0;
const moreZero = firstNum < 0;
const numCheck1 = firstNum == "" ;

// do{
//     let firstNum = prompt("Введіть перше число: ");
// } 
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

let evenCheck = confirm("пропускати парні числа?");
let res = 0;
if(evenCheck){
    for (let i = firstNum; i <= secondNum; i++){
       const evenCheck1 = i % 2 == 0; 
       if(!evenCheck1){
        res += i;
       }
     }
    } else {
        for (let i = firstNum; i <= secondNum; i++){
            res += i;
       }
        
    }

    
    
    
alert("Результат суми =  " + " " + res);





