let num: number = 1;
// num = '1' // error: number 타입으로 지정한 변수는 문자열로 작성 불가
num = 2;
console.log(num);

let str: string = 'str';
// 타입 작성하기
let isTrue: boolean = true;
let undef: undefined;
let empty: null = null;

let isTrue2 = true;
let undef2;
let empty2 = null;
// isTrue = 'aa' //isTrue2 변수는 boolean 타입이라고 직접 작성 하지 않아도 알아서 booleand임을 추론해 문자열로 재 할당 시 에러 발생
// isTue = 'aa'

// array
// 요소으ㅏ 갯수를 미리 명시할 필요는 없지만
// array의 요소가 어떤 타입인지는 명시 필요

// 배열의 요소가 한 가지인 경우
let numArr: number[] = [1,2,3,4,5];
let strArr = ['가', '나', '다', '라'];

// 배열의 여러 개의 타입을 작성하고 싶을 떄
// number or string 타입의 요소를 가진 배열
let array1: (number | string)[] = [1,2,3, '가', '나', '다'];

let arr2 = [true, null, false, [4, 22]]
let arr3: (boolean   )
let arr4: Array<boolean >

