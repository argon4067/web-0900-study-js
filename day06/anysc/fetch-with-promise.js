
// throw로 catch에 에러를 던진다.
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if(!response.ok){
//       throw new Error(`response Error ${response.status}`)}
//       return response.json()
//   })
//   .then((posts) => {
//     if(!posts){
//       throw new Error(`none result`)}
//       // posts.forEach((post) =>{
//       //   console.log(post.id, post.title)
//       // }}

//       //비구조화 할당 ES6
//       posts.forEach(({id, title}) => {
//         console.log(id, title)
//       })
//   })
//   .catch((err) => {
//     console.error(err)
//   })

  // 비구조화 할당(ES6)
  // 구조할당
  const user = {
    name : "최도윤" ,
    age : 19,
    address : "서울시 구로"
  }

  // 객체의 비구조
  const {name,age,address} = user;
  console.log(name,age,address);

  // 배열의 비구조
  const [one, two, three, four, five, six] = [10, 20, 30, 40, 50, 60];
  console.log(one, two)
