// function logText(text: string) {
//   console.log(text);
//   text.split("").reverse().join("");
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

//유니온 타입
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// logText(10);
// logText("하이");
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("abc");
str.split("");
const login = logText<boolean>(true);

//호출 시점에 타입이 정해짐
// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText("하이");

//인터페이스에 제네릭을 선언
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: "abc", selected: false };

//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(["h1", "abc"]);
