let firstNum;
// const secondNum = prompt("Enter second number");
while(!(firstNum%1==0 && Number.isInteger(parseInt(firstNum)))){
    firstNum = prompt("Enter first number");
    console.log({firstNum});
    if(firstNum==null && firstNum==undefined){
        alert("Please,enter true value");
    }
}

// while((firstNum % 1 === 0 && Number.isInteger(parseInt(firstNum)))){
//     firstNum = prompt("Enter first number" );
//     console.log(firstNum);
    
// }
// if(firstNum==null){
//     console.log("enter true value");
// }