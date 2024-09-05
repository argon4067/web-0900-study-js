// 선언
// const arr1 = [];
// const arr2 = new Array();
// const arr3 = new Array(10).fill(0);
// const arr4 = Array.of("초기값1","초기값2");

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(arr4)

// .split(), String 안에서 사용
// const phoneNumber = "010-9999-5555";

// // .join(), array 안에서 사용
// console.log(phoneNumber.split("-"))
// console.log(phoneNumber.split("-").join(""))

// // .replace(), String 안에서 사용
// // .replaceAll(), String 안에서 사용
// console.log(phoneNumber.replaceAll("9","*"))

// // 추가
// // .push(), array 안에서 사용
// // 기존의 배열의 마지막 위치에 값을 추가한다.
// const arr =["김세환", "홍길동", "장보고"]
// arr.push("마피아", "흰둥이", "대마왕")
// console.log(arr)

// // .concat(), array
// // 두 개의 배열을 [새로운 배열]로 리턴한다.
// const arr1 = ["짱구", "고길동"]
// const arr2 = ["철수","영회"]
// const arr3 = arr1.concat(arr2);
// //배열끼리 더하면 문자열이 된다
// console.log(arr1+arr2)
// // 두 개의 배열을 더해서 *새로운* 배열 생성
// console.log(arr1.concat(arr2));

// 제거 / 유사 잘라내기
// .pop(), array
// 마지막 요소를 제거하고 그 값을 반환한다.
// const arr4 = [10,20,30,40];
// console.log(arr4.pop())
// console.log(arr4)

// // .unshift()
// // 맨 앞에 요소를 추가하는 메서드
// const arr5 = [10,20,30,40];
// arr5.unshift(200)
// console.log(arr5)

// // shift()
// // 맨 앞에 요소를 제거하는 메서드
// console.log(arr5.shift())
// console.log(arr5)

// .slice(start, end) array
// startIndex부터 endIndex 전까지 요소를 1depth 복사하여 새로운 배열을 반환한다.<안 짤라간다>
// const arr6 =[10,20,30,40,50,60,70,80,90,100];

// //
// console.log(arr6.slice(4,8))
// console.log(arr6)
// console.log(arr6.slice(-4,-1))
// // 매개변수를 1개만 전달하면 끝까지!
// console.log(arr6.slice(4))
// console.log(arr6.slice(-4))

// .splice(startIndex, deleteCount) String
// 제거 및 수정
// const arr7 =[10,20,30,40,50,60,70,80,90,100];
//  console.log(arr7.splice(2,3))
// // 수정
// // .splice(startIndex, deleteCount)
// console.log(arr7.splice(3,1,400))
//  // .splice(startIndex, deleteCount, ...pushItems)
//  // 그 자리에 아이템만큼 넣기
//  console.log(arr7.splice(3,1,400,400,400,400,400))
//  console.log(arr7)

// 정렬
// .sort() array
// const arr8 = [100, 150, 15, 200, 600, 70, 80, 20, 40];

// console.log(arr8.sort((a,b) => a - b ))
// // 반대로 할땐 안에 문자도 들어갈수 있으니까 reverse() 사용
// console.log(arr8.sort((a,b) => a - b ).reverse())

// // 포함
// // .includes(), string, array
// console.log(arr8.includes(100))

// // .some(), array
// // 조건식을 1개라도 만족하면 true 아니면 false
// console.log(arr8.some((data) => data % 11 == 0))

//--------------------------------------------------------------------------------------
// 배열의 고차함수(메서드)
const arr9 = [100, 200, 300, 400, 500, 600, 700];

// .forEach(callback(data, i, datas)) : 반복문
// 반복을 돌아서 각각 하나의 값에 접근하여 필요한 기능을 실행 시킬 수 있다.
// data는 값, i는 인덱스, datas는 배열
// arr9.forEach((data, i, arr9) => {
//   console.log(data)
// });

// arr9번을 forEach를 사용하여, 모든 배열의 값을 제곱값으로 변경하기
// arr9.forEach((data, i, datas) => {
//   datas[i] *= datas[i];
// });
// console.log(arr9)

// .map(callback(data, i, datas))
// 값을 저장해서 [새로운 배열]로 리턴한다.
// 반드시 리턴 값이 존재해야 한다.

// const arr10 = arr9.map((data, i, datas) => {
//   return data + 10;
// })
// 람다식
const arr10 = arr9.map(data => data + 20)
// console.log(arr10)

// .filter((data) => 조건식)
// 조건식이 true인 값만 모아서 [새로운 배열]로 리턴한다.
// 반드시 리턴 값이 존재해야 한다.
// 값이 바뀌지 않는다.

arr10.filter(data => data % 3 == 0).forEach(data => console.log(data));

// 3개 고차함수중에 .forEach() 제일 마지막
// .indexOf
// .find
// .from
// .reduce
