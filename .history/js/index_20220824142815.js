let firstNum;
// const secondNum = prompt("Enter second number");
// if(firstNum%1==0){
//     console.log(firstNum);

// } else{
//     alert("Is not integer number");
// }
// if(Number.isInteger(firstNum)){
//     console.log("ціле число:" +firstNum);
// } else{
//     alert("Is not integer number");
// }

while((firstNum % 1 === 0 && Number.isInteger(parseInt(firstNum)))){
    firstNum = prompt("Enter first number" );
    console.log(firstNum);
    if(firstNum===null){
        console.log("");
    }
}