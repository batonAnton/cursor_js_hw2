let firstNum;
let secondNum;
while(!(firstNum%1==0 && Number.isInteger(parseInt(firstNum)))){
    firstNum = prompt("Enter first number");
    console.log({firstNum});
    if(firstNum < 0){
        alert("Число повино бути більше ніж 0");
        firstNum = prompt("Enter first number");
        console.log({firstNum});
    }

    if(firstNum === null || firstNum === "" || typeof firstNum === 'string'){
        alert("this field is empty or it'not a number");
        firstNum = prompt("Enter first number");
        console.log({firstNum});
    }  
    
    
}


while(!(secondNum%1==0 && Number.isInteger(parseInt(secondNum)))){
    secondNum = prompt("Enter second number");
    console.log({secondNum});
    if(secondNum <= 0){
        alert("Число повино бути більше ніж 0");
        secondNum = prompt("Enter first number");
        console.log({secondNum});
        
    }
    if(secondNum === null || secondNum === "" || typeof secondNum === 'string'){
        alert("this field is empty");
        secondNum = prompt("Enter second number");
        console.log({secondNum});
    } 
}
const evenNum = confirm("Пропускати парні числа?");
console.log(evenNum);

    
    