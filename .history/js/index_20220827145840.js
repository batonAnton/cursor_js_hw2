let firstNum = prompt("Введіть перше число: ");
let intCheck = firstNum % 1 !== 0;
// let  = Number.isInteger(firstNum);
let moreZero = firstNum <=0;

    
    

 while((moreZero || intCheck && typeof firstNum !== "num" )){
    
    alert("Введіть правильне значення ");  
    
    firstNum = +prompt("Введіть перше число: ");
    console.log(firstNum);
} 

let secondNum = prompt("Введіть число ступені : ");


while((moreZero || intCheck && typeof secondNum !== "num" )){
    
    alert("Введіть правильне значення ");  
    
    secondNum = +prompt("Введіть число ступені: ");
    console.log(secondNum);
} 
if(secondNum <= firstNum){
    alert("степінь повинна бути більшою за число");
    secondNum = +prompt("Введіть число ступені: ");
    console.log(secondNum);
}
let evenCheck = confirm("пропускати парні числа?");
let res = 0
if(evenCheck){
    for (let i = firstNum; i <= secondNum; i++){
        let evenCheck1 = i % 2 == 0; 
       if((!evenCheck1)){
        res += i;
       }
     }
    } else{
        
        res+=i;
        }

  

}
alert("Результат суми =  " + " " + res);





