interface Developer1 {
  name: string;
  skill: string;
}

interface Person1 {
  name: string;
}

class Person {
  name: string;
  skill: string;
}

var developer: Developer1;
var person: Person1;
developer = new Person();

// person = developer;

//함수

var add = function (a: number) {
  //...
};

var sum = function (a: number, b: number) {
  //  ...
};

sum = add;
// add = sum;

// 제네릭
interface Empty<T> {
  //..
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  //..
  data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
notempty1 = notempty2;
notempty2 = notempty1;
