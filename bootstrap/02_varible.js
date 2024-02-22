console.log ("connected!");
// 변수 선언하고 사용하기
/*
var 키워드
1.변수 선언 -> 값 할당 동시에
2.변수 선언과 값 할당 동시에
*/ 
// 변수 선언
var varName; // undefined
// 변수 할당
varName ="layla";
// 변수 재할당
varName ="Yuki";
console.log(varName); //Yuki 출력
// 변수 선언과 값 할당을 동시에
var varName2 = "layla2";
//var의 이상한 점
// 1. 변수를 동일한 이름으로 재선언 할 수 있음
var varName = "Lily";
console.log(varName); //lily출력
// 2. 변수를 선언하기 전 값을 할당할 수 있음
// 장점같아 보이지만 유지보수할 때 최악임
aa = 123
console.log(aa)

/*
    let 키워드
    1.변수 선언 ->값 할당
    2.변수 선언과 값 할당을 동시에
 */
let letName 
letName = "홍길동";
let letName2 ="심창이"
console.log(letName2);
// 변수 선언과 값을 동시에
let letName2 ="심봉사";
console.log(letName2);
//  letName2 ="심봉사"; //error:중복 선언 불가

letName2 ="심봉사";//값 재할당 가능
console.log(letName2);


