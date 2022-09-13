let firstNum = prompt("Введіть перше число: ");
let intCheck = firstNum % 1 !== 0;
// let  = Number.isInteger(firstNum);
let moreZero = firstNum <=0;

    debugger;
    

 while((moreZero || intCheck || typeof firstNum !== "num" )){
    
    alert("Введіть правильне число ");  
    
    firstNum = +prompt("Введіть перше число: ");
    console.log('firstNum');
} 


   if(typeof firstNum !== "num" && firstNum ==0){
    alert('введіть число');
    firstNum = +prompt("Введіть перше число: ");
    console.log('firstNum');
   }





