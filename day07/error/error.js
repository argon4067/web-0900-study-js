// js의 try-catch문은 동기적으로 작동한다.
// try{
//   // 몇 초 뒤에 실행(비동기)
//   setTimeout(()=>{

//     에러문;
//   }, 2000)
//   // 몇 초 마다 실행(비동기)
//   // setInterval()
// }catch(e){
//   console.log(e.name)
//   console.log(e.message)
//   console.log(e.stack)
//   console.log("잘못된 값을 입력!😥")
// }finally{

// }

setTimeout(()=>{
  try{
    에러문;
  } catch(error){
    console.log("잘못입력")
  }
}, 2000)