//함수의 파라미터에 타입을 정의하는 방식

function add1(a: number, b: number) {
  return a + b;
}

add1(10, 20);

//함수의 반환 값에 타입을 정의하는 방식
function add2(): number {
  return 10;
}

//함수의 타입을 정의하는 방식

function add3(a: number, b: number): number {
  return a + b;
}
add3(10, 20, 30, 40); //불필요한 인자를 엄격하게 체크해준다.

//함수의 옵셔널 파라미터
function log(a: string, b?: string) {
  console.log(a, b);
}

log("hello world");
log("hello ts", "abc");
