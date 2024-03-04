// 실습-배열에서의 반복
// console.log('1~100까지 배열')
// let numbers = []
// for (let i = 1; i <= 100; i++) {
//     numbers.push(i);
// } console.log(numbers);

//for문 - 합 구하기
// let sum = 0;
// var sum1 = 0;
// for(let i = 1; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     sum1 = sum1 + numbers[i];
// }

//for of문 - 합 구하기
// let sum2 = 0;
// var sum3 = 0;
// for (let num of numbers) {
//     sum2 = sum2 + num
// } 

// for each문 - 합 구하기
// var sum3 = 0;
// numbers.forEach((num) => {
//     sum3 = sum3 + num;
// })
// console.log(sum1, sum2, sum3);

// 실습-배열에서의 반복 - Leader
// let numArr = [];
// for (let i = 0; i < 100; i++) {
//     numArr.push(i + 1);
// }

//for문 - 합 구하기
let sum1 = 0;
for (let i = 0; i < numArr.length; i++) {
    sum1 = sum1 + numArr[i];
    // sum1 += numArr[i]
}
console.log(sum1);

//for of문 - 합 구하기
let sum2 = 0
//numArr 배열에 있는 모든 요소를 num이라고 지칭하면서 반복한다
for (let num of numArr) {
    sum2 = sum2 + num;
    // sum2 += num
}
console.log(sum2)

// for each문 - 합 구하기
let sum3 = 0;
numArr.forEach(function(num) {
    sum3 = sum3 + num;
})
console.log(sum3);



