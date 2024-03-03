// 실습-배열에서의 반복
console.log('1~100까지 배열')
let numbers = []
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
} console.log(numbers);

//for문 - 합 구하기
let sum = 0;
var sum1 = 0;
for(let i = 1; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum1 = sum1 + numbers[i];
}

//for of문 - 합 구하기
let sum2 = 0;
var sum3 = 0;
for (let num of numbers) {
    sum2 = sum2 + num
} 

// for each문 - 합 구하기
// let sum3 = 0;
// nums.forEach((number) => {
//     sum3 += Number(nums);
// }); 
// console.log(sum);
var sum3 = 0;
numbers.forEach((num) => {
    sum3 = sum3 + num;
})
console.log(sum1, sum2, sum3);