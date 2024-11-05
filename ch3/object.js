// 참조형 변수 선언과 할당
/*
  참조형은 Object와 배열 등이 속함
  오브젝트형은 {} 사이에 key : value 형태로 데이터를 입력한다. 
*/

var msg = {
  name: "불꽃남자",
  comment: "포기를 모르는 남자",
  age: 19,
};

// var array = [];
// array.push(msg);
// 오브젝트 데이터 생성시 new 연산자를 사용하는 것이 정석

var array = new Array();
array.push(msg);

console.log(array);
