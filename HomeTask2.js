/* 
    Задание 1:

    Вывести в консоль с помощью цикла FOR все четные числа от 10 до 50
*/


for (let i=10; i<=50; i++){
    if (i % 2 == 0)
    console.log(i);
}
    

/* 
    Задание 2:

    Необходимо создать объект в котором вы опишите самого себя в формате : "свойство: значение"

    Список свойств:

    - Имя(string)
    - Фамилия(string)
    - Возраст(number)
    - Есть ли домашние животные(boolean)
*/
const myPerson = {
    Name : 'Marija',
    Surname : 'Borisova',
    Age : 39,
    HomeAnimals : true
};
console.log(myPerson);
/* 
    Задание 3:

    Отрывок из текста А.С Пушкин, Капитанская дочка был разбит на небольшие кусочки и помещен в массив. 
    Необходимо собрать этот текст из массива и придать ему первоначальный вид.

    Текст до разбивки на части:

    "В ту же ночь приехал я в Симбирск, где должен был пробыть сутки для закупки нужных вещей,
    что и было поручено Савельичу. Я остановился в трактире. Савельич с утра отправился по лавкам"

    Массив: 
    const array = [
        'я в Симбирск,',0
        'в трактире.',1
        'с утра',2
        'В ту же ночь',3
        'Я остановился',4
        'для закупки', 5
        'что и было поручено Савельичу.',6
        'приехал,',7
        'где должен был',8
        'нужных вещей',9
        'отправился по лавкам',10
        'пробыть сутки',11
        'Савельич'12
    ]

   итоговый текст должен быть собран из массива array и результат записать в переменную result
*/
const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки', 
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
];

const result = array.slice(3, 7, 0, 8, 11, 5, 9, 6, 4, 1, 12, 10);
console.log(result);        
/* 
    Задание 4:

    Напишите функцию, в теле которой будет находится следующий код:

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);

    firstName и lastName - это параметры функции

    При вызове функции передайте ей, в качестве аргумента, свое имя и фамилию.
*/

const getName =(firstName,lastName) =>{
    let firstName;
    let lastName;
    const fullName = firstName +''+ lastName;
    console.log(fullName);
    }
    checkAge('Marija', 'Borisova'); 

/* 
    Задание 5:

    Вывести в консоль с помощью цикла WHILE все нечетные числа от 21 до 67
    
*/
let num = 21;
while(num<67){
  num++;
  if(num%2) 
  
  console.log(num);
}