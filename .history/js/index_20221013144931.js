let x = prompt("Введіть перше число: ");
let firstNum = parseInt(x);

// if(typeof parseInt(x) != "num"){
//     alert("Введіть правильне значення ");  

//     firstNum = +prompt("Введіть число ступені: ");
//     console.log({firstNum});
// }
// debugger;


while( (parseInt(x) <= 0 || parseInt(x) == " "|| Number.isInteger())){
    
    alert('Введіть правильне значення ');  
        firstNum = +prompt("Введіть число ступені: ");
        debugger;

    

} 

let y = prompt("Введіть число ступені : ");
let secondNum = parseInt(y);

// if(typeof secondNum != "num"){
//     alert("Введіть правильне значення ");  

//     secondNum = +prompt("Введіть число ступені: ");
//     console.log({secondNum});
// }


while( parseInt(y) <= 0 || parseInt(y) == " " || Number.isInteger() || typeof parseInt(x) != "num" ){
    alert("Введіть правильне значення ");  
    
    secondNum = +prompt("Введіть число ступені: ");
        console.log({secondNum});
    

} 
while(parseInt(y) <= parseInt(x)){
        alert("степінь повинна бути більшою за число");
        parseInt(y) = +prompt("Введіть число ступені: ");
    }

let evenCheck = confirm("пропускати парні числа?");
let res = 0;
if(evenCheck){
    for (let i = parseInt(x); i <= parseInt(y); i++){
       const evenCheck1 = i % 2 == 0; 
       if(!evenCheck1){
        res += i;
       }
     }
    } else {
        for (let i = parseInt(x); i <= parseInt(y); i++){
            res += i;
       }
        
    }
    
    

    
document.writeln(`Сума всіх цифр становить: ${res}`);


