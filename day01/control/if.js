// if(){
//   true 실행할 문장;
// }

// if(){
//   true일 때 실행할 문장;
// }else{
//   아닐 때 실행할 문장
// }
// if(){

// }else if() {

// }else{

// }

console.log("if문")

// 이름 : 최도윤
// 국어 : 80점
// 수학 : 70점
// 영어 : 90점
// 과학 : 20점

// 평균, 총점 구하기
// if문으로 평균이 60점 이상인 학생은 합격, 60점 이하인 학생은 불합격 출력하기

// 최종 문장
// OOO님의 이번 총점은 OO, 평균은 OO점으로 (합격 또는 불합격)입니다.
let name = "최도윤";
let korScore = 80;
let mathScore = 70;
let engScore = 90;
let scScore = 20;

let sum = korScore+mathScore+engScore+scScore;
let ave = sum/4;
let result = 0;
if(ave >=60){
  result="합격"
}else {
  result="불합격"
}

console.log(`${name}님의 이번 총점은 ${sum}점,평균은 ${ave}점으로 ${result} 입니다.`);
