let firstNum;
let secondNum;
// const secondNum = prompt("Enter second number");
while(!(firstNum%1==0 && Number.isInteger(parseInt(firstNum)))){
    firstNum = prompt("Enter first number");
    console.log({firstNum});
    if(typeof firstNum === 'string' && !isNaN(firstNum - 0) && firstNum !== ''){
        alert("Please,enter true value");
    } else {
        firstNum = prompt("Enter first number");
        console.log({firstNum});
    }
    
}

// while(!(secondNum%1==0 && Number.isInteger(parseInt(secondNum)))){
//     secondNum = prompt("Enter second number");
//     console.log({secondNum});
//     if(typeof secondNum === 'string'){
//         alert("Please,enter true value");
//     } else {
//         secondNum = prompt("Enter second number");
//         console.log({secondNum});
//     }
    
// }

// while((firstNum % 1 === 0 && Number.isInteger(parseInt(firstNum)))){
//     firstNum = prompt("Enter first number" );
//     console.log(firstNum);
    
// }
// if(firstNum==null){
//     console.log("enter true value");
// }