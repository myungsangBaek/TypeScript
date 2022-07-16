function Person2(name, age) {
  this.name = name;
  this.age - age;
}

const capt = new Person2("캡틴", 100);

class Person {
  constructor(name, age) {
    console.log("생성 되었습니다.");
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); // 생성 되었습니다.
console.log(seho);
