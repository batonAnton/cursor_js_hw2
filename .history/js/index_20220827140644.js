let firstNum = prompt("Введіть перше число: ");
let evenNum = firstNum % 1 == 0;
let intCheck = Number.isInteger(firstNum);
let moreZero = firstNum <=0;

    debugger;
    

 while((evenNum && intCheck )){
    
    alert("Введіть правильне число ");  
    
    firstNum = +prompt("Введіть перше число: ");
    console.log('firstNum');
} 
if(moreZero){
    alert("more than 0");

}

   if(typeof firstNum !== "num" && firstNum !==0){
    alert('введіть число');
    firstNum = +prompt("Введіть перше число: ");
    console.log('firstNum');
   }





