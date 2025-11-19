//JS基礎レッスン　練習問題

console.log('Q1.変数');

let nickneme = 'ごっしー';
let age = 28;
let greet = '私のニックネームは' + nickneme + 'です。' + '年齢は' + age + '歳です。';
console.log(greet);


console.log('\nQ2.配列');

let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は ${languages[0]} です。
次は ${languages[3]} を勉強してみたいです。`;
console.log(templateText);


console.log('\nQ3.オブジェクト');

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);


console.log('\nQ4.配列 × オブジェクト');

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);


console.log('\nQ5.四則演算');

console.log(playerList[0].age + playerList[1].age + playerList[2].age /3);


console.log('\nQ6.関数');

function sayHello(){
  console.log('Hello');
}

sayHello();

const sayWorld = function(){
  console.log('World');
}

sayWorld();


console.log('\nQ7.メソッド');

user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log('Hello！');

};

user.sayHello();


console.log('\nQ8.引数');

let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.add(3, 4); 

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.subtract(15, 5);

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.multiply(7, 7);

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.divide(30, 6);


console.log('\n Q9.返り値');

function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);
console.log(`${5} を ${3} で割った余りは ${result} です。`);


console.log('\n Q10.スコープ');

//function foo() {
//  let x = 1;
//}
//console.log(x);

// x は foo 関数のスコープ内でしか存在しない ため、
// 関数の外からは 参照できません。
// 以下のように記述すれば関数外で x が存在するため、
// 出力可能になる

let x;

function foo() {
  x = 1;
}

foo();
console.log(x); 




//JS基礎レッスン　応用問題


console.log('\n Q1.標準組み込みオブジェクト');

console.log(Math.floor(Math.random() * 10));


console.log('\n Q2 - 1.コールバック関数');

function sayHello() {
  console.log('Hello World!');
}

setTimeout(sayHello, 3000);

//setTimeout(() => {
//  console.log('Hello World!');
//}, 3000);


console.log('\n Q2 - 2.コールバック関数');


function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('草介', addIntro);


console.log('\n Q3 if');

let num = 0

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else if (num === 0) {
  console.log('num is 0');
}


console.log('\n Q4 for');

let numbers = [];

for (let i = 0; i < 100; i++){
  numbers.push(i);
}

console.log(numbers);


console.log('\n Q5 for × if');

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let item of mixed) {
  if (typeof item === 'number') {
    if (item % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}