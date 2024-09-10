// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     if(!response.ok){
//       throw new Error(`response Error${response.status}`)}
//       return response.json()
//   })
//   .then((users) => {
//       if(!users){ 
//         throw new Error(`no users`)
//       }
//       return users.map((user) => user.address.zipcode)
//     })
//     .then(console.log)
//     .catch(console.error)
  
    
// const printZipcode =() => {
//   const response =fetch("https://jsonplaceholder.typicode.com/users")
//   return users;
// }
// printZipcode().then((response) => response.json()).then(console.log)


// ES8 async await
// 리턴타입은 프로미스
// fetch가 가져오는 리스폰스 객체가 비동기에 로직을 타고 있으니
// 팬딩하지말고 바로 보내라고 해서 동기의 흐름을 맞춘다.
const printZipcode = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json();
  return users;
 }

 printZipcode()
 .then(console.log)
 .catch(console.log)
 