console.log('connected');

// for문 
/*
for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가/감소할지 직성); 증감) {
    반복할 코드
}
 */
// i + 1 = i / i +=1 / i++ -> 모두 동일함
// i - 1 = i / i -=1 / i-- -> 모두 동일함
// i++: 변수 i에서 값을 꺼낸 뒤, 1을 더함
// i--: 변수 i에서 값을 꺼낸 뒤, 1을 뺌

// 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림

for (let i = 0; i < 10; i++) {
    console.log('안녕', i);
    // console.log('안녕 ${i}');
}
for (let i = 0; i < 10; i += 3) {
    console.log(i);
}
//1부터 5까지 1씩 증가하면서 출력하는 방법
//1. i <=5
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
//2, i < 6
for (let i = 0; i < 6; i ++) {
    console.log(i)
}

console.log('-------------------------------');
//5부터 1까지 1씩 감소하면서 출력하기
for (let i = 5; i > 0; i--) {
    console.log(i)
}

// 퀴즈. 1부터 n까지 모든 수를 더해 result로 콘솔에 찍기
let n = 10;
let result = 0;
for (let i = 1; i <= n; i ++) {
//    result = result + i;
result += i; //위를 비해 짧은 코드
}
console.log(result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ['americano', 'latte', 'espresso', 'tea'];
console.log(cafe.length); //배열의 길이를 출력 -> 4

for (let i = 0; i < cafe.length; i++) {
    console.log('cafe menu', cafe[i]);
    // i가 1일 때  반복 cafe[0]
    // i가2일 때  반복 cafe[1]
    // i가3일 때  반복 cafe[2]
    // i가 4일 때  반복 cafe[3]
    // i가5일 때  반복되지 않아요! -> i가 4이기 때문 ->조건식이 false이어서 for문 종료
}

//배열 요소의 총 합 구하기
let numArr = [99, 88, 77, 66, 55];
let numSum = 0;

for (let i = 0; i  < numArr.length; i++) {
    // numSum = numSum + numArr[i];
    numSum += numArr[i];
    console.log(numSum);
}
 
console.log(numSum);

// for문과 if문 함께 사용
// 1.for문만 사용
for (let i = 2; i <= 10; i+= 2) {
    console.log(i);
}

// 2. if문과 함께 사용
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//2단 구구단 실습: 내가 한 거임
// for(let i = 2; i <= 9; i++) {
//     console.log(i + '단');
//     for(let j = 1; j <= 9; j++) {
//     console.log(i + ' * ' + j + ' = ' + (i*j));
//     }
//   }
// const number = 2; //리더님 한 거임
// console.log(number + '단')
// for (let i = 1; i < 10; i++)
// console.log('${number}* ${i} = ${number *1}');

// 2~9까지 구구단:내가 한 거임
for(let i = 2; i <= 9; i++) {
    console.log(i + '단');
    for(let j = 1; j <= 9; j++) {
    console.log(i + ' * ' + j + ' = ' + (i*j));
    }
  }

// 구구단 다른 방법
// for(let i = 2; i < 10; i++) {
//     console.log(`${i}단`);
//     for(let j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i*j}`);
//     }
//   }

//이중 for문
for (let i = 0; i < 5; i++){
    console.log(`i : `, i);

    for (let j = 0; j < 10; j++) {
        console.log(`현재 i는 ${i}이고, j는 ${j}입니다.`)
    }
}

// ----------------------------------------------------
// while 문 
/*
    while(조건) {
        조건에 만족하는 동안 실행될 코드
    }
*/
// 조건을 제어하는 구문이 없기 때문에 무한 루프에 빠지지 않도록 주의해서 사용
let num = 1;
while  (num <= 5) {
    console.log(num) ;
    num++; // -> num = num + 1
}

num = 9;
while (num >= 4) {
    console.log(num);
    num--; // 1씩 감소시킴
}

console.log('----------------------');
// while 뮨 사용해 1부터 10까지 짝수 출력
num = 1;
while (num <= 10 ) {
    if (num % 2 === 0) {
        console.log(num) ;
    } 
    num++;
}

// while 뮨 사용해 10부터 1까지 홀수 출력
num = 10;
while (num >= 1 ) {
    if (num % 2 === 1) { // if (num % 2 !== 0)
        console.log(num) ;
    } 
    num--;
}

console.log('----------------------');
// 무한루프 -> 조건식이 참이면 무한히 while문을 빠져나올 수 없음
let num2 = 0;
while (true) {
    console.log(num2);
    num2++;
    
    // break; // break 없다면 무한루프 또는 빠져나가야 할 조건을 설정
    if (num2 > 10) {
        break;
    }
}

// num2 = 0;
// while (confirm('계속 할까요?')) {
//     num2++
//     alert(`${num2}번째 alert 창`);
// }


console.log('----------------------');
//실습_1
// for문
let num3 = 0;
let sum = 0;
for (num3 = 0; num3 <= 100; num3++) {
    if (num3 % 2 == 0 || num3 % 5 == 0) {
        sum += num3;
    }
}
console.log(sum);

// let pracSum = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0 || i % 5 == 0) {
//         pracSum += i;
//     }
// }

// while문
num3 = 0;
sum = 0;
while (num3 <= 100) {
    if(num3 % 2 == 0 || num3 % 5 == 0) {
        sum += num3;
    }
    num3++;
}
console.log(sum);

// let pracNum = 0;
// let pracSum2 = 0;

// while (pracNum <= 100) {
//     if (pracNum % 2 === 0 || pracNum % 5 === 0) {
//         pracSum2 += i;
//         pracNum++;
//     }
// }

//실습_2
let input = Number(prompt('숫자를 입력해주세요.'));
for(let i = 0; i <= input; i++) {
    if (i % 13 === 0 && i % 2 === 1) {
        console.log(i);
    }
}

//실습 3. 이중 for문을 사용해 구구단 출력
for (let i = 2; i <= 9; i++) {
    console.log(`---${i} 단---`)
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

