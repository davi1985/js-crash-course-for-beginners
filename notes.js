// variables - let, const
let myAge = 34;
const pi = 3.14;

// Data types - String, Number, Boolena, null, undefined
// verify type of data types use 'typeof'
const name = 'Davi';
const age = 34;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// String
// Concatenation
const normalConcatenation = 'My name is ' + name + ' and I am ' + age;
const templateString = `My name is ${name} and I am ${age}`;

// Some Methods
const s = 'Hello World';
const length = s.length;
const upperCase = s.toUpperCase();
const lowerCase = s.toLowerCase();
const substring = s.substring(0, 5).toUpperCase();
const split = s.split('');

// Arrays - variables that hold multiple values
const numbers = new Array(1, 2, 3, 4);
const fruits = ['apples', 'oranges', 'pears'];
const multipleTypes = [true, function () {}, 'Davi', 32];

const accessingArrayElement = fruits[0];

// add element in array
fruits[3] = 'grapes';

// Some methods
const addElementInEndOfArray = fruits.push('mangos');
const addElementInBeginner = fruits.unshift('strawberries');
const removeLastElementInArray = fruits.pop();
const isArray = Array.isArray(fruits);
const hasElementInArray = fruits.indexOf('mangos'); // if true return the index of element / else return -1

// Objects

const person = {
  firstName: 'Davi',
  lastName: 'Silva',
  age: 34,
  hobbies: ['music', 'photography'],
  address: {
    street: 'Serra de Peroba',
    city: 'Icapui',
    state: 'CE',
  },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const userDotToAccessProperties = person.firstName;
const accessArrayInObject = person.hobbies[1];
const accessObjectInObject = person.address.city;

// destructuring object
const { firstName, lastName } = person;
const {
  address: { city },
} = person;
const { hobbies } = person;
const hobbyOne = hobbies[0];
// add propertie
person.email = 'dssilvap@hotmail.com';

// array objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true,
  },
  {
    id: 3,
    text: 'Dentist appt',
    isCompleted: false,
  },
];

// get value of propertie in object inside array
const getObjectPropertieInArray = todos[1].text;

// JSON
// converter to json
const todoJSON = JSON.stringify(todos);

// Loops FOR
for (let i = 0; i < 10; i++) {
  // console.log(`For loop number ${i}`);
}

// While
let i = 0;
while (i < 10) {
  // console.log(`While loop number ${i}`);
  i++;
}

// for of ...
for (let todo of todos) {
  console.log(todo.id, todo.text, todo.isCompleted);
}

// forEach, map, filter
todos.forEach(function (todo) {
  console.log(todo.text);
});

// map -> return a new array
const todoText = todos.map(function (todo) {
  return todo.text;
});

// filter -> returns a new array based on a condition
const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);

// conditionals
const x = 4;
const y = 10;

if (x > 0) {
  // console.log('yes');
} else {
  // console.log('no');
}

// ternary operator
const z = 11;
const color = z > 10 ? 'red' : 'blue';
// console.log(color);

// switch

switch (color) {
  case 'red':
    // console.log('color is red');
    break;
  case 'blue':
    // console.log('color is blue');
    break;
  default:
    // console.log('try again');
    break;
}

// functions
function addNums(num1, num2) {
  return num1 + num2;
}

// arrow function

const arrow1 = (num1, num2) => {
  return num1 + num2;
};

const arrow2 = (num1, num2) => num1 + num2;
const arrow3 = (num1) => num1 + 5;

// Constructor functions
function Person(firstName, lastName, birthdate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthdate = new Date(birthdate);
}

// Instatiate object
const person1 = new Person('Davi', 'Silva', '11.03.1985');
const person2 = new Person('Sarar', 'Emilly', '12.18.2017');

// prototypes
Person.prototype.getBirthYear = function () {
  return this.birthdate.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// console.log(person1.getFullName());

// Class
class PersonClass {
  constructor(firstName, lastName, birthdate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(birthdate);
  }

  getBirthYear() {
    return this.birthdate.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new PersonClass('Davi', 'Silva', '11.03.1985');
const person4 = new PersonClass('Sarar', 'Emilly', '12.18.2017');

console.log(person4.getFullName());

//DOM
//  single element
const form = document.getElementById('my-form');
const form1 = document.querySelector('.container');
// multiple element
const ul = document.querySelectorAll('.item');
console.log(ul);

// remove all selects
// ul.remove();

// remove specific element
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();

// replace text content in element
ul.firstElementChild.textContent = 'Element replaced';
ul.children[1].innerHTML = 'Davi';
ul.lastElementChild.innerHTML = '<h1>Hi there</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// manipulating elements, html class and id, and events
const ul = document.querySelector('.items');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#my-form').style.background = '#ccc';

  document.querySelector('body').classList.add('bg-dark');

  document.querySelector('.items').lastElementChild.innerHTML =
    '<h1>Hello</h1>';
});
