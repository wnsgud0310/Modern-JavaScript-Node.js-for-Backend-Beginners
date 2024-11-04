// undefined의 사전적인 의미는 '정의되지 않은'이다. 변수는 선언했지만 '값이 할당되지 않은 상태'

var name;
console.log(name);

var name = "lch";
console.log(name);
name = undefined;
console.log(name); // 변수  name 에 문자열'lch'가 대입되었으므로 문자열혀 변수다. 여기에 undefined 값을 의도적으로 대입할 수 있음.
// undefined 값은 엄밀하게 보면 변수를 초기화하지 않은 오류 상태임.
// undefined 값을 변수에 대입하는 코드는 사용하지 말것.

/* null 과 undefined의 차이
null : 해당 변수에 값이 없다는 것 - 사용자가 의도적으로 대입하는 값
undefined : 사용자의 실수로 초기화하지 않은 변수에 의도하지 않게 대입되는 값, 일종의 오류 값
사용자가 변수의 빈 값을 설정하는 경우에는 null 사용해야함


*/
