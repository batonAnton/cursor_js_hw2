let firstNum;
let secondNum;

// (!(firstNum%1==0 && Number.isInteger(parseInt(firstNum))))
while(!(firstNum % 1 == 0) || (firstNum == "") || (firstNum < 0) || Number.isInteger(parseInt(firstNum))){
    // firstNum = prompt("Введіть число яке потрібно підняти до степеню");
    // console.log({firstNum});
        firstNum = prompt("Введіть число яке потрібно підняти до степеню");
    alert("Це не число");

        console.log({firstNum});
    if(firstNum <=0){
        alert("Число повино бути більше ніж 0");
        firstNum = prompt("Введіть число яке потрібно підняти до степеню");
        console.log({firstNum});
    }
    debugger;
    if(firstNum === null || firstNum === "" ){
        alert(" ви нічого не ввели");
        firstNum = prompt("Введіть число яке потрібно підняти до степеню");
        console.log({firstNum});
    }  
    // else if( typeof firstNum === 'string'){
        
    //     alert("Це не число");
    //     firstNum = prompt("Введіть число яке потрібно підняти до степеню");
    //     console.log({firstNum});
    // }
//     } else if(typeof firstNum === 'num'){
//         while(!(secondNum%1==0 && Number.isInteger(parseInt(secondNum)))){
//             secondNum = prompt("Введіть число степеню яке потрібно підняти");
//             console.log({secondNum});
//             if(secondNum <= 0){
        
//                 alert("Число повино бути більше ніж 0");
//                 secondNum = prompt("Введіть число степеню яке потрібно підняти");
//                 console.log({secondNum});
                
//             }
//             if(secondNum === null || secondNum === ""){
//                 alert("Ви нічого не ввели");
//                 secondNum = prompt("Введіть число степеню яке потрібно підняти");
//                 console.log({secondNum});
//             }
//             // if(secondNum === Number(secondNum)){
//             //     alert("Це не число");
//             //     secondNum = prompt("Введіть число степеню яке потрібно підняти");
//             //     console.log({secondNum});
//             // }
//         }
//         const evenNum = confirm("Пропускати парні числа?");
//         console.log(evenNum);
        
//         const finallyResult = Math.pow(firstNum, secondNum);
//         console.log({finallyResult});
        
            
            
//     }
    
// }

    }
