// 1) 1~10까지 Array 객체에 담은 후 짝수만 출력
const arr1 = new Array(10).fill(0)
arr1.map((data,i) => i+1).filter((data) => data % 2 == 0).forEach((data) => {console.log(data)});

// 2) 한글을 숫자로
// ex) "일이삼사" => "1234"
const hangles ="공일이삼사오륙칠팔구"
const arr2 ="일이삼사".split("");
console.log(arr2.map(c => hangles.indexOf(c)).join(""))
// 3) 숫자를 한글로
// ex) "1234" => "일이삼사"
const arr3 ="1234".split("");
console.log(arr3.map(c => hangles.charAt(c)).join(""))
console.log(arr3.map(data => hangles[data]).join(""))
// 4) 1~100까지 합 출력
const arr4 = new Array(100).fill(0)
let sum = 0;
(arr4.map((data,i) => i+1).forEach((data) => sum += data));
console.log(sum)
// console.log(arr4.map((data,i) => i+1)).reduce(function(result){
// })
// 5) 문자열 반대로 출력하기 .reverse() 사용
  console.log(hangles.split("").reverse().join(""))
// 6) 전화번호를 파라미터로 받아서 파싱하기(데이터를 바꿔주기)
const phoneNum = "010-1234-5678"
// console.log(phoneNum.replaceAll("1234","****"))

const phoneNumber = "010-1234-5678".split("");
phoneNumber.splice(4,4,"*", "*","*","*").join("")
console.log(phoneNumber.join(""));

// ex) 010-1234-5678
// result) 010-****-5678

const phoneNumber1 = "010-1234-5678".split("-");
phoneNumber1[1] ="****";
const parsePhone = phoneNumber1.join("-")
console.log(parsePhone)


///////////////////////////////////////////////////////////
// 4) 1~100까지 합 출력
let result = 0;
new Array(100).fill(0).map((data, i) => i + 1).forEach(data => { result += data })
console.log(result)

// 5) 문자열 반대로 출력하기 .reverse() 사용
let result2 = "apple".split("").reverse().join("");
console.log(result2)

// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1234-5678
// result) 010-****-5678

// const phoneNumber = "010-1234-5678".split("-");
// phoneNumber[1] = "****";
// const parsePhoneNumber = phoneNumber.join("-")
// console.log(parsePhoneNumber)

// const phoneNumber2 = "010-1234-5678".split("-");
// const parsePhoneNumber2 = phoneNumber2.splice(1,1,"****")
// console.log(phoneNumber2.join("-"));
