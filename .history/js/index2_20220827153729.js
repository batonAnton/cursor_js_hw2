let N;
let M;

while (!Number.isInteger(N) || Number(N) == "" || Number(N) < 0) {
  N = +prompt("Введіть число від якого будемо складати");
  if (!Number.isInteger(N)) {
    alert("Це має бути ціле число");
    continue;
  } else if (Number(N) == "") {
    alert("Потрібно ввести числове значення");
    continue;
  } else if (Number(N) < 0) {
    alert("Число не може бути від'ємне");
    continue;
  }
  debugger;
  
}
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