// 프로토타입
// 클래스는 아닌데 클래스 역할을 함
// function User(name, age){
//   this.name = name
//   this.age = age
// }

// const user1 = new User("김세환", 20);
// const user2 = new User("홍길동", 20);
// const user3 = new User("이순신", 20);
// const user4 = new User("장보고", 20);
// const user5 = new User("김유신", 20);

// User.prototype.hello = "안녕하세요";
// console.log(user2.hello)

// console.log(new User())


// ---------------------------------------------------------
// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다. (담아라)
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
function Costomer(name,age,point){
  this.name = name
  this.age = age
  this.point = point
}
const comstomer1 = new Costomer("홍길동",30,3500)
const comstomer2 = new Costomer("이순신",22,0)
const comstomer3 = new Costomer("장보고",66,9500)

const mart = new Object();
mart.comstomer1 = comstomer1;
mart.comstomer2= comstomer2;
mart.comstomer3 = comstomer3;
// 유저의 이름만 모두 출력한다.
for(let Costomer in mart){
  console.log(mart[Costomer].name)
}
// 유저의 포인트를 모두 출력한다.
for(let Costomer in mart){
  console.log(mart[Costomer].point)
}
// 모든 유저는 자신의 이름을 출력할 수 있는 printName 메서드를 가지고 있다.
// this 바인딩 차이: 
// 오브젝트보다 더큰 window에 이름이 없어서 언디파인
Costomer.prototype.printName = () => {
  console.log(this.name)
}

Costomer.prototype.printName = function(){
  console.log(this.name)
}

/////////////////////////////////////////
// function User(name, age, point){
//   this.name = name;
//   this.age = age;
//   this.point = point;
// }

// const user1 = new User("홍길동", 30, 3500)
// const user2 = new User("이순신", 22, 0)
// const user3 = new User("장보고", 66, 9500)

// const market = new Object();
// market.user1 = user1;
// market.user2 = user2;
// market.user3 = user3;

// for(let i = 0; i < 3; i++){
//   console.log(market[`user${i+1}`].name)
// }

// for(let i in market){
//   console.log(market[i].point)
// }

// User.prototype.printName = () => {
//   console.log(this.name)
// }

// User.prototype.printName = function(){
//   console.log(this.name)
// }

// user1.printName()
