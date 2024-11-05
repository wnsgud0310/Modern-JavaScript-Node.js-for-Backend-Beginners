// 할당 연산자
/*
기본 할당 연산자는 =로 표기하고 연산자의 오른쪽의 값을 왼쪽으로 대입하는 역할을 한다
이 연산자를 할당 연산자 또는 대입 연산자
= : a=b의 경우 b의 값을 a에 대입한다.
*/

var a = 3;
var b = a + 2;
var c = b - a;

console.log(a);
console.log(b);
console.log(c);

// 복합 할당 연산자 : 자신의 변수에 연산하고 그 결과를 다시 자기 자신의 변수에 저장

var a = 3;
a = a + 2;
console.log(a);

a = a - 2;
console.log(a);

a = a * 5;
console.log(a);

a = a / 5;
console.log(a);

/*
    복합 할당 연산자
+= : a +=b 인경우 a의 값에 b를 더해 a에 대입한다 a = a+b 와 같다
-= : a -=b 의 경우 a의 값에 b를 뺀 결괏값을 a에 대입한다. a = a-b와 같다
*= : a*=b의 경우 a의 값에 b를 곱한 결괏값을 a에 대입한다. a = a*b와 같다
/= : a/=b이 경우 a의 값에 b를 나눈 몫의 결괏값을 a에 대입한다. a = a/b와 같다

*/

var a = 3;
a += 2;
console.log(a);

a -= 2;
console.log(a);

a *= 5;
console.log(a);

a /= 5;
console.log(a);
