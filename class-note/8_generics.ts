function logText(text: string) {
  console.log(text);
  text.split("").reverse().join("");
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

//유니온 타입
function logText(text: string | number) {
  console.log(text);
  return text;
}

logText(10);
logNumber(10);
logText("하이");
logText(true);

//호출 시점에 타입이 정해짐
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText("하이");
