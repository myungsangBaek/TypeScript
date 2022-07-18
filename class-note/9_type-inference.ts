var a = "abc";

function getA(a) {}

function getB(b = 10) {
  var c = "hi";
  return b + c;
}

10 + "10"; // 1010

// 타입 추론 기본 2
// interface DropDown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: DropDown<string> = {
//   value: "abc",
//   title: "hello",
// };

// 타입 추론 기본 3
interface DropDown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends DropDown<T> {
  description: string;
  tag: T;
}

var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "a",
  tag: "T",
};

// 가장 적절한 타입 (Best Common Type)
var arr = [1, 2, true, true, "a"];
