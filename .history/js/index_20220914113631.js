let x = prompt("Введіть перше число: ");
let firstNum = parseInt(x);




while( (firstNum <= 0 || firstNum == " "|| Number.isInteger() && Number.isNaN())){
    alert("Введіть правильне значення ");  
    
        firstNum = +prompt("Введіть число ступені: ");
        console.log({firstNum});
    

} 

let y = prompt("Введіть число ступені : ");
let secondNum = parseInt(y);

while( secondNum <= 0 || secondNum == " " || Number.isInteger() ){
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
    
    

    
document.writeln(`Сума всіх цифр становить: ${res}`);


