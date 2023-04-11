/*
  ! Murzakulov Beksultan
*/
//? ----------------------------------------- Задание 1
let myFavoriteFilms = {
  'Форрест Гамп': 1994 ,
  '1 + 1': 2011 ,
  'Властелин Колец': 2003 ,
  'Джентельмены': 2020 ,
  'Зеленая книга': 2018 ,
  'Брат': 1997 
}
for(let films in myFavoriteFilms){
  console.log(films)
}
//? ----------------------------------------- Задание 2
let myFriends = {
  'Baitur': 19 ,
  'Daniyar': 33 ,
  'Samat': 36 ,
  'Vlad': 22 ,
  'Dima': 31 ,
  'Arstan': 28
}
for(let friend in myFriends){
  if(myFriends[friend] > 30){
    console.log(friend)
  }
}
//? ----------------------------------------- Задание 3
function printObject(obj) {
  for (let i in obj) {
    console.log(`${i}: ${obj[i]}`);
  }
}
//? ----------------------------------------- Задание 4
let infoPerson = {
  'name': "Beksultan" ,
  'surname': "Murzakulov" ,
  'age': 19 ,
  'favoriteColor': 'black'
}
for(let person in infoPerson){
  console.log(infoPerson[person])
}
//? ----------------------------------------- Задание 5
let products = {
  'Яблоко': 35 ,
  'Помидоры': 40 ,
  'Бананы': 45 ,
  'Молоко': 55 ,
  'Творог': 50 ,
  'Масло': 85 
}
let total = 0
for(let product in products){
  total = total + products[product]
}
console.log(`Сумма продуктов: ${total}`)
//? ----------------------------------------- Задание 6
function calcKeys(obj){
  let calc = 0
  for(let key in obj){
    calc++
  }
  return calc
}
//* ----------------------------------------- Задание 7  -ChatGPT-
const grades = {
  'Анна': 85,
  'Боб': 92,
  'Карл': 78,
  'Джон': 89,
  'Мэри': 95
}
let highestGrade = 0
let highestGradeStudent = ''
for (let student in grades) {
  if (grades[student] > highestGrade) {
    highestGrade = grades[student]
    highestGradeStudent = student
  }
}
console.log(`Студент с наивысшей оценкой: ${highestGradeStudent}, оценка: ${highestGrade}`)
//* ----------------------------------------- Задание 8  -ChatGPT-
let myFavoriteFilms2 = {
  'Форрест Гамп': 1994 ,
  '1 + 1': 2011 ,
  'Властелин Колец': 2003 ,
  'Джентельмены': 2020 ,
  'Зеленая книга': 2018 ,
  'Брат': 1997
  }
  function sortMoviesByYear(myFavoriteFilms2) {
  const arr = Object.entries(myFavoriteFilms2)
  arr.sort((a, b) => a[1] - b[1])
  const titles = arr.map(movie => movie[0])
  return titles
  }
  const sortedTitles = sortMoviesByYear(myFavoriteFilms2)
  console.log(sortedTitles)