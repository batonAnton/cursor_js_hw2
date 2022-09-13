let N =+prompt("Введіть число від якого будемо складати");;
let M;

while (!Number.isInteger(N) || Number(N) == "" || Number(N) < 0) {

  alert("error");
  N =+prompt("Введіть число від якого будемо складати");;
  }
  debugger;
  

while (!Number.isInteger(M) || Number(M) == "") {
  M = +prompt("Введіть число до якого будемо складати");
  if (!Number.isInteger(M)) {
    alert("Це має бути ціле число");
    continue;
  } else if (Number(M) == "") {
    alert("Потрібно ввести числове значення");
    continue;
  }
}