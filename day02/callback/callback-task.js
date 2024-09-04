// 1) 두 수를 더해서 출력하기
// 2) 성과 이름을 받아서 연결하고 출력하기
// 3) 두 정수의 곱셈 결과를 출력하기
// 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기


const add = (num1, num2, callback) => {
  callback(num1+num2)
}
const print = (value) => {
  console.log(value);
}
add(10,20,print)

const link =(surname, firname, callback) => {
  callback(surname+firname)
}
link("최","도윤",print)

const muti = (num1, num2, callback) => {
  callback(num1 * num2)
}
muti(10,20,print)

const printName =(value) => {
  console.log(`${value}님 환영합니다`)
}

link("최","도윤",printName)
//-------------------------------------------------------
// 실습
// function print(value){
//   console.log(value);
// }

// // 1) 두 수를 더해서 출력하기
// const sum = (num1, num2, callback) => {
//   callback(num1 + num2);
// }

// sum(10, 20, print)

// // 2) 성과 이름을 받아서 연결하고 출력하기
// const getFullName = (lastName, firstName, callback) => {
//   callback(lastName + firstName)
// }
// getFullName("김", "세환", print)


// // 3) 두 정수의 곱셈 결과를 출력하기
// const mul = (num1, num2, callback) => {
//   callback(num1 * num2)
// }

// mul(10, 20, print)

// // 4) 성과 이름을 받아서 OOO님 환영합니다. 출력하기
// const hello = (fullname, callback) => {
//   callback(`${fullname}님 환영합니다.`)
// }

// getFullName("김", "세환", (fullName) => {
//   hello(fullName, print)
// })

// -----------------------------------------------------------------------------
// 1) 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
const oddEven = (num1, callback) =>{
  // if(num1 % 2 == 0){
  //   callback("짝수")
  // } else{
  //   callback("홀수")
  // }
  callback(num1 % 2 == 0 ? "짝수" : "홀수")
}
add(10,20,(num1)=>{
  oddEven(num1, print)
})
// 2) 두 정수의 곱셉을 구한 뒤 결과에 2를 곱해서 출력
const twice = (number1 , callback) => {
  callback(number1 *2)
}
muti(10,20,(num1)=>{
  twice(num1, print)
})
// 3) 두 정수의 값 중 작은 값을 반환하여 출력
const compare =(num1,num2,callback)=>{
  callback(num1 > num2 ? num1 : num2)
}
// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// 5) 사용자가 입력한 값까지 누헙한 한 후 5의 배수인지 확인 후 출력


