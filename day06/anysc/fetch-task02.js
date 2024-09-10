// https://jsonplaceholder.typicode.com/todos

// ES8 async await 데이터 통신
// getTitles
// todos에서 title중에서 5개만 가져오기 (0~4)
// 값으로 가져오기
// 값으로 가져온 데이터를 "제목 : title" 내용으로 변경해서 출력하기

// const getTitles = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos")
//   if(!response.ok) return;
//   const datas = await response.json();
//   return datas;
// }

// const titles =getTitles().then((datas) => datas.map(({title}) => title));
// titles
// .then((titles)=> titles.slice(0,5))
// .then((titles) => titles.map((title) =>`제목 : ${title}`))
// .then(console.log)
// .catch(console.log)

// https://jsonplaceholder.typicode.com/comments
// email만 10개만 가져온 후 email에서 아이디만 가져오기
// [Eliseo@gardner.biz] -> ["Eliseo", ...]
// 아이디만 출력하기

// const getEmail = async () => {
//   // 오자마자 주니까 결과값이 있어서 변수 선언가능
//   const response = await fetch("https://jsonplaceholder.typicode.com/comments")
//   if(!response.ok) return; 
//   // await 생략하면 컴퓨터 속도 이슈로 처리전에 리턴 갈수 있어서 생략하지말기
//   const datas = await response.json();
//   return datas;
// }

// const emails = getEmail().then((datas) => datas.map(({email}) => email));
// emails
//   .then((emails) => emails.slice(0,11))
//   .then((emails) => emails.map((email) => email.split("@")[0]))
//   .then((ids) => ids.map((id) => `유저아이디 : ${id}`))
//   .then(console.log)
//   .then(console.error)



// https://jsonplaceholder.typicode.com/users
// 이름만 가져와서 이름을 거꾸로 뒤집어서 출력하기
// Leanne Graham -> maharG ennaeL
const getName = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  if(!response) return;
  const datas = await response.json();
  return datas;
}

const names = getName().then((datas) => datas.map(({name}) => name));
names
  .then((names)=> {
    return names.map((name) => {
     let reverseName ="";
      for(let i =0; i< name.length; i++){
        reverseName += name.charAt(name.length -i -1);
      }
      return reverseName;
    })
  })
  // .then((name) => name.reverse())

  .then(console.log)
  .catch(console.log)
