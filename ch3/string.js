var lang = "javascript";
var love = "사랑하";
var you = null;
var num = 5;
console.log(lang + null + love + num); // 자료형이 문자열이 아닌 변수들도 문자열과 +로 결합하면 문자열로 변환된다
// null 과 5는 문자열이 아니지만 문자열과 결합하여 출력되었다

//문자열 길이 구하기
var msg = "JavaScript is the world's most popular programming language.";
console.log(msg.length);

// 큰따옴표와 작은따옴표의 혼용
var msg1 = 'She said "Good bye"';
var msg2 = "She's gone";

console.log(msg1);
console.log(msg2);
