interface User {
  age: number;
  name: string;
}

//변수에 인터페이스 활용

const seho: User = {
  age: 29,
  name: "한",
};

//함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: "한",
  age: 100,
};
getUser(capt);
