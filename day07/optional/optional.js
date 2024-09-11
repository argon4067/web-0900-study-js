const movies = {
  name : "오펜하이머",
  detail : {
    price : "50000",
    date : "20240911"
  }
}

const movies2 = {
  name : "에나벨",
  detail : {
    price : "50000",
  }
}

function printMovieData(movie){
  return movie.detail.date;
}

console.log(printMovieData(movies).split(""))
// 옵셔널 체이닝(오류나면 접근안함) : 안전하게 값을 넘길때 사용
console.log(printMovieData(movies2)?.split(""))


