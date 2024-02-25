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
// let letName2 ="심창이"
console.log(letName2);
// 변수 선언과 값을 동시에
let letName2 ="심봉사";
console.log(letName2);
//  letName2 ="심봉사"; //error:중복 선언 불가

letName2 ="심봉사";//값 재할당 가능
console.log(letName2);

/*
    const 키워드 
    -반드시 변수 선언과 할당이 동시에 이뤄져야 함
    -변수 재선언, 재할당 불가능
    -사용처: 변지 않는 값을 변수에 저장할 떄 사용
*/ 
// const constName; // error:선언과 동시에 값 할당 필요란 의미\
const constName ='layla'
console.log(constname); //layla

/*
    정리
    -var: es6 이전에 사용되던 변수 선언 키워드 -> 사용 지양하자!
    -let: 변수 선언 키워드
        -변수 선언 -> 값 할당
        -변수 중복 선언은 불가능
        -변수 재할당은 가능 (값을 수정할 수 있음)
    -const: 상수 선언 키워드
        -상수: 변하지 않는 값
        -변수 선언과 값 할당을 동시에 해야 함
        -재선언, 재할당 불가능
    -식별자 규칙
     : 이름을 지정할 때 사용하는 단어 (변수명, 함수명 등)
     -키워드 사용 불가
        -키워드: 특별한 역할을 이미 하고 있는 단어
        -ex. var,let,const,if,function,for,return,...
     -숫자로 시작 불가
     -특수문자 _, $만 허용
     -공백 문자는 사용 불가

    사용 가능한 식별자: a, name, name1, name$, my_name, myName
    사용 불가능한 식별자: var, let, const, 1st, my name, my-name
*/ 
let name = "hi"
let age =18;
if(name === "hi"|| age > 19) {
    HTMLFormControlsCollection.log("pass")
} else {
    console .log("nonpass")
}
