// 최우선 연산자
// 10 * 20 + 2 = 202;
// 10 * (20 + 2) = 220;
console.log("최우선 연산자")
let number1 = 10 * 20 + 2 //202
let number2 = 10 * (20 + 2) //220
console.log(number1,number2)

// 이상 연산자(항 2개)
// 산술연산 (+, -, *, /, %)
// 누적복합연산자(+=, -=, *=, /=)
console.log("누적복합연산자")
let number3 = 10
number3 += 10
console.log(number3)

//관계 연산자
console.log("관계연산자")
console.log(20 == "20")
console.log(20 === "20")

// 논리 연산자
//갑이 있으면 true 값이 없으면 false
// 앞에는 걍 조건 반환은 뒤에꺼
console.log("논리연산자")
console.log(false || 100)
console.log(false && 200)
console.log(true && 200)
console.log(200 && false)

// 삼항 연산자
console.log("삼항연산자")
// 조건 ? 실행할 문장 또는 값 : 실행할 문장 또는 값
let num1= 20;
let result = 0;
num1 % 2 == 0 ? result += num1 : "";
console.log(result);

// 형변환
// typeof() : 타입확인
console.log("형변환");
let result1 = String(10); // ==="10";
let result2 = Number("10"); // === 10;
let result3 = Boolean("true"); // === true;
console.log(typeof(result1));
console.log(typeof(result2));
console.log(typeof(result3));

// 자동 형변환
console.log(typeof(+"20"));
// 좌 연결성
console.log(typeof("10"+"20")); // 형변환 아님

console.log(typeof(!10));

// false가 아닌데 false 취급을 받는 값
console.log(Boolean(100)) // true

console.log(Boolean (NaN)) // flase
console.log(Boolean (null)) // flase
console.log(Boolean (0)) // flase
console.log(Boolean (undefined)) // flase
console.log(Boolean("")) // flase
console.log(Boolean(" ")) //true