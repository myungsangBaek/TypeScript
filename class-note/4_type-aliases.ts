interface Person {
  name: string;
  age: number;
}

type Person1 = {
  name: string;
  age: number;
};

const han1: Person = {
  name: "han",
  age: 30,
};

const stark: Person1 = {
  name: "han",
  age: 30,
};

type MyString = string;
const str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };

function getTodo(todo: Todo) {}
