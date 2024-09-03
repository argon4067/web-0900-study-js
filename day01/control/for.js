// for(초기식; 조건식; 증감식){}
// for(let i =0; i <10; i++){
//   console.log(`${i+1}번 째 최도윤`);
// }

// 1~10까지 더해서 출력하기
// let result =0;
// for(let i =0; i<=10; i++){
//   result += i;
// }
// console.log(`1부터 10까지의 합은 ${result}입니다.`);
// 1~100까지 짝수만 출력하기
// for(let i =0; i<100; i++){
//   if(i%2 == 0){
//     console.log(i);
//   }
// }
for(let i =0; i <=50; i++){
  console.log(i*2)
}
for(let i =0; i <=50; i++){
  let even = i % 2 == 0
  even && console.log(i)
}
// 100~1까지 출력하기
// for(let i =100; i>0; i--){
//   console.log(i);
// }
// 0~10 중 5만 빼고 출력하기
// let result=0;
// for(let i =0; i<11; i++){
//   i == 5 ? result = i+1 : result = i ;
//   console.log(result);
// }
// for(let i =0; i<9; i++){
//  let result = i >= 5 ?  i+1 : i ;
//   console.log(result);
// }

// 012340123401234 출력하기

// for(let i=0; i <15; i++){
//   console.log(i % 5);
// }

let result ="";
for (let i =0; i <15; i++){
  result += i % 5;
}
console.log(result);