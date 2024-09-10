// promise ES6
// 동기 : 페이지
// 비동기 : 데이터
// 비동기에서 팬딩을 프로미스라는 객체로 감싸서 동기로 가져옴
// 성공하면 resolve로 실패하면 reject로
const promise = new Promise(function(resolve, reject){
  let check =false;
  if(check){
    resolve("성공");
  }else{
    reject("실패")
  }
})
// 성공하면 then()에서 잡기
// promise.then((result) =>{console.log(result)})
// 실패하면 catch()로 잡기
promise.then(console.log).catch(console.log);