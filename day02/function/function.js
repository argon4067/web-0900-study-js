function add(num1, num2){
  return num1 + num2;
}

let result =add(10,20);
console.log(result);

// 디폴트 파라미터
function sum(num1, num2, num3=0){
  return num1 + num2 + num3;
}

let result1 =sum(10,20);
console.log(result1);

// 실습
//숫자 5개를 받아서 모두 출력하는 함수
function printNum(num1,num2,num3,num4,num5){
  console.log(num1, num2, num3, num4, num5);
}

printNum(10,20,30,40,50)

// 2개의 문자열을 열결시켜주는 함수
function initialValue(){
  return "";
}
function linkString(str1,str2=initialValue()){
  return str1+str2;
}

let result3 =linkString("안녕","멍청아")
console.log(result3);

// 사용자가 파라미터로 입력한 값을 모두 더하기
//  rest parameter(가변 인자)
function addAll(...numbers){
  console.log(number[3])
}

// 가변 인자로 이름, 나이 이메일을 입력받아서 출력하는 함수
function person(...string){
  for(i=0; i<string.length; i++){
  console.log(string[i])
  }
}

person("최도윤",20,"qwewqe@naver.com")

// 가변인자로 사용자가 입력한 값을 모두 더해서 값을 주는 함수
function sum1(...numbers){
  let result =0;
  for(let i = 0; i <numbers.length; i++) {
  // ealry return;
  if(typeof(numbers[i]) !== "number") { return; }
    result += numbers[i];
  }
  return result;
}

let result4 =sum1(10,20,"r");
console.log(result4);