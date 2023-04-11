const myFavoriteFilms = {
  'Форрест Гамп': 1994,
  '1 + 1': 2011,
  'Властелин Колец': 2003,
  'Джентельмены': 2020,
  'Зеленая книга': 2018,
  'Брат': 1997,
};

// Используем Object.keys вместо Object.entries для получения списка названий фильмов
const printFavoriteFilms = (films) => {
  Object.keys(films).forEach((film) => {
    console.log(film);
  });
};

printFavoriteFilms(myFavoriteFilms);

const myFriends = {
  'Baitur': 19,
  'Daniyar': 33,
  'Samat': 36,
  'Vlad': 22,
  'Dima': 31,
  'Arstan': 28,
};

// Переименовываем переменную для большей ясности
const filterFriendsByAge = (friends, age) => {
  const filteredFriends = Object.keys(friends).filter((friend) => friends[friend] > age);
  return filteredFriends;
};

const filteredFriends = filterFriendsByAge(myFriends, 30);
console.log(filteredFriends);

const infoPerson = {
  'name': "Beksultan",
  'surname': "Murzakulov",
  'age': 19,
  'favoriteColor': 'black',
};

// Добавляем дополнительный параметр, чтобы можно было выбрать, выводить ли только ключи или только значения
const printObject = (obj, keysOnly = false, valuesOnly = false) => {
  if (keysOnly) {
    Object.keys(obj).forEach((key) => {
      console.log(key);
    });
  } else if (valuesOnly) {
    Object.values(obj).forEach((value) => {
      console.log(value);
    });
  } else {
    Object.entries(obj).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }
};

printObject(infoPerson, true, false); // Выводим только ключи

const products = {
  'Яблоко': 35,
  'Помидоры': 40,
  'Бананы': 45,
  'Молоко': 55,
  'Творог': 50,
  'Масло': 85,
};

// Добавляем дополнительный параметр, чтобы можно было выбрать, что считать (сумму или количество)
const calculateProductStats = (products, operation = 'sum') => {
  if (operation === 'count') {
    return Object.keys(products).length;
  } else {
    const total = Object.values(products).reduce((accumulator, currentValue) => accumulator + currentValue);
    return total;
  }
};

const total = calculateProductStats(products);
console.log(`Сумма продуктов: ${total}`);

const grades = {
  'Анна': 85,
  'Боб': 92,
  'Карл': 78,
  'Джон': 89,
  'Мэри': 95,
};

// Используем Object.entries вместо for..in для получения пар ключ-значение
const findHighestGrade = (grades) => {
  let highestGrade = null; // инициализируем переменную с наивысшей оценкой значением null
let studentName = ''; // инициализируем переменную с именем студента пустой строкой
Object.entries(grades).forEach(([name, grade]) => {
if (highestGrade === null || grade > highestGrade) {
highestGrade = grade; // обновляем значение наивысшей оценки, если текущая оценка выше
studentName = name; // сохраняем имя студента с наивысшей оценкой
}
});
return studentName;
};

const highestGradeStudent = findHighestGrade(grades);
console.log(`Студент с наивысшей оценкой: ${highestGradeStudent}`);

const myFavoriteFilms2 = {
  'Форрест Гамп': 1994,
  '1 + 1': 2011,
  'Властелин Колец': 2003,
  'Джентельмены': 2020,
  'Зеленая книга': 2018,
  'Брат': 1997,
};

// Функция для сортировки фильмов по годам выпуска
function sortMoviesByYear(films) {
  // Преобразуем объект в массив пар ключ-значение и сортируем его по году выпуска
  const arr = Object.entries(films).sort((a, b) => a[1] - b[1]);
  // Оставляем только названия фильмов
  const titles = arr.map(movie => movie[0]);
  // Возвращаем отсортированный массив названий фильмов
  return titles;
}

// Вызываем функцию и выводим результат
const sortedTitles = sortMoviesByYear(myFavoriteFilms2);
console.log(sortedTitles);
