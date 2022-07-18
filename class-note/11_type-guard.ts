interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Han", age: 29, skill: "React" };
}

var han = introduce();
console.log(han.skill);

//가독성 떨어져서 쓰는게 타입가드
if ((han as Developer).skill) {
  var skill = (han as Developer).skill;
  console.log(skill);
} else if ((han as Person).age) {
  var age = (han as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(han)) {
  console.log(han.skill);
} else {
  console.log(han.age);
}
