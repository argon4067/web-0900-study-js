// 1) 1~10까지 누적합 구하기

// .reduce((accumulate,current,index) => {}, initialValue)
let result = 0;
// const arr1 = new Array(10).fill(0).map((data,i) => i+1).reduce((acc, crr, i)=>{
//   return acc += crr;
// },0)
const arr1 = new Array(10).fill(0).map((data,i) => i+1).reduce((acc, crr, i) => acc += crr);

console.log(arr1)
// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
const arr2 = new Array(50).fill(0).map((data,i) =>i+1).filter((data) => (data % 2 == 0)).map((data,i)=> data*3).forEach((data)=>{console.log(data)});
// console.log(arr2)
// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
const arr3 = new Array(5).fill(0).map((data,i)=>10*(i+1)).sort((a,b)=>b-a)
console.log(arr3)
// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
const arr4 =new Array(10).fill(0).map((data,i)=>1+i).map((data)=> data > 5 ? data*2 : data)
console.log(arr4)
// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
const arr5 = new Array(30).fill(0).map((data,i) =>i+1).filter((data)=>data % 2 != 0).join("*")
console.log(arr5)
// ex) let arrTask1 = 1*3*5*7*9...
// 6) arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아 arrTask1의 기존의 값을 2배로 변경 후
// 모든 값을 출력하기
const arr6 = arr5.split("*").map((data,i)=>data*2)
console.log(arr6)
// console.log(arr6)
// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력
const arr7 =new Array(20).fill(0).map((data,i)=>1+i).slice(-5).reduce((acc, crr, i) => acc += crr)
console.log(arr7)

//////////////////////////////////////////////////////////////////////////////////////////

// 1) 1~10까지 누적합 구하기
// 10칸짜리 배열이 필요.
// 초기값으로 채운다. 초기값 0
// .map() 사용해서 기존에 0을 모두 순차적으로 바꾼다.
// .reduce((accumulate, current, index) => {}, initialValue)
// const arr1 = new Array(10).fill(0).map((data, i) => i + 1).reduce((acc, crr, i) => {
//   return acc += crr;
// }, 0)
// const arr1 = new Array(10).fill(0).map((data, i) => i + 1).reduce((acc, crr, i) => acc += crr );
// console.log(arr1)

// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
// const arr2 = new Array(50).fill(0).map((data, i) => i + 1).filter((data) => data % 2 == 0).map((data) => data * 3).forEach((data) => console.log(data));
// console.log(arr2);

// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 
// 내림차순 정렬 후 출력하기
// Array.of(10, 20, 30, 40, 50).reverse().forEach((data) => { console.log(data) })

// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
// let result = new Array(10).fill(0).map((data, i) => i + 1).map((data) => data > 5 ? data * 2 : data);
// console.log(result)

// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) let arrTask1 = 1*3*5*7*9...
// let arrTask1 = new Array(15).fill(0).map((data, i) => (i + 1) * 2 - 1).join("*")
// console.log(arrTask1);

// 6) arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아
//  arrTask1의 기존의 값을 2배로 변경 후
// 모든 값을 출력하기
// arrTask1.split("*").map((data) => data * 2).forEach((data) => {console.log(data)})

// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력
let result3 = new Array(20).fill(0).map((data, i) => i + 1).slice(-5).reduce((acc, crr) => acc += crr);
console.log(result3)
