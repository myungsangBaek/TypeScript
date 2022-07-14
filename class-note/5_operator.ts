function logMessage(value: any) {
  console.log(value);
}

logMessage("hello");
logMessage(100);

function logMessage1(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

//공통된 속성만 접근 가능
function askSomeone(someone: Developer2 | Person2) {
  someone.name;
  someone.skill;
  someone.age;
}

//실무에서 가장 많이 사용
askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone({ name: "한", age: 100 });

//인터셉션 타입

function askSomeone2(someone: Developer2 & Person2) {
  someone.age;
  someone.name;
  someone.skill;
}

askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 34 });

// var aHan: string | number | boolean;
// var bHan: string & number & boolean;
