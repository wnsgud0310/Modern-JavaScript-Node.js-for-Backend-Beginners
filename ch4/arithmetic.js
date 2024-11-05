var a = 3;
var b = 2;

console.log("더하기 결과 : " + (a + b));
console.log("빼기 결과 : " + (a - b));
console.log("곱하기 결과 : " + a * b);
console.log("나누기 / 결과 : " + a / b);
console.log("나누기 % 결과 : " + (a % b));
console.log("거듭제곱 결과 : " + a ** b);

console.log("hello " + "world"); // 문자열간의 결합 기능 가능

// 문자열 + 숫자 => 문자열의 결합
console.log("긴급출동" + 119);
console.log("1" + 1);

// +문자열(숫자형) => 숫자형
// 불린형 => 숫자형

console.log(+"1024" + 1);
console.log(+true);
console.log(+false);

// 빼기, 곱하기 ,나누기는 피연산자가 문자열이더라도 내용이 숫자형 데이터면
// 내부적으로 문자열을 숫자형으로 자동형변환

console.log("10" - 2);
console.log("10" * 2);
console.log("10" / 2);
console.log("10" - 2);
console.log("10" * 2);
console.log("10" / 2);
// 문자열이지만 내용이 숫자형인 경우 -,*,/ 이항 연산자는 자동 형변환시켜 숫자형의 연산결과 출력
