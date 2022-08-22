// const makeSheff = function (name) {
//   const makeDish = function (dish) {
//     console.log(`${name} готує ${dish}`);
//   };
//   return makeDish
// }

// const mango = makeSheff('Mango');

// console.dir(mango)

// mango('котлети');
// mango('пиріжок');


// const poly = makeSheff('Poly');

// poly('котлети');


// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(3));

// const rounder = function (number, places) {
//   return Number(number.toFixed(places))
// }

// console.log(rounder(3.4567, 3))

// const rounder = function (places) {
//   return function (number) {
//     return  Number(number.toFixed(places))
//   }
// }

//  const rounder2 = rounder(2);
//  const rounder3 = rounder(3)

// console.dir(rounder2)
//  console.log(rounder2(3.4567))
//  console.log(rounder3(3.4567))
//  console.log(rounder2(3.4567))
//  console.log(rounder3(3.4567))
// // console.log(withDecimals)

// const add = function (a, b, c) {
//   console.log(a, b, c);
//   return a + b + c;
// }

// console.log(add(5, 10, 15))

// const add = (a, b) => {
//   console,log('saadasf')
//   return a + b
// }



// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);


// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log('number', number)
// });

// console.log(numbers);

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points:54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 210, points:55, online: true },
//   { id: 'player-3', name: 'Megan', timePlayed: 110, points:64, online: false },
//   { id: 'player-4', name: 'Dotty', timePlayed: 510, points:34, online: true },
//   { id: 'player-5', name: 'James', timePlayed: 310, points:44, online: true },
//   { id: 'player-6', name: 'Robert', timePlayed: 210, points:55, online: false },
// ];

// const playerNames = players.map((player) => player.name);
// console.log('playerNames', playerNames)

const playerIdToUpdate = 'player-4';
// Як змінити одну властивість із масиву обєктів 
// const upatedPlayrs = players.map(player => {
//   if (playerIdToUpdate === player.id) {
//     console.log('Ось ми знайшли кого потрібно обновити')
    
//     return {
//       ...player,
//       timePlayed: player.timePlayed + 100
//     }
//   }
  
//   return player
// });

// console.log(upatedPlayrs);
// Скорочуємо 
// const upatedPlayrs = players.map(player => playerIdToUpdate === player.id 
//   ? {...player, timePlayed: player.timePlayed + 100} 
//   :player);

// console.log(upatedPlayrs);

// const findPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(player => player.id === playerId)
// };

// console.log(findPlayerById(players, 'player-3'))

// const students = [
//   { name: "Манго", courses: ["математика", "фізика"] },
//   { name: "Полі", courses: ["інформатика", "математика"] },
//   { name: "Ківі", courses: ["фізика", "біологія"] },
// ];

// const allCourses = students.flatMap(student => student.courses);

// console.log(allCourses)

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses)

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find(option => option.label === "blue"); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find(option => option.label === "pink"); // { label: 'pink', color: '#E91E63' }
//  // undefined

// console.log(colorPickerOptions.find(option => option.label === "pink"));


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }


// console.log(makeMessage("Royal Grand", makePizza))





// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError ) {
//     for (const pizza in this.pizzas) {
//       if (pizza !== pizzaName) {
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//       }
//         return onSuccess(pizzaName)
//     }
// }
// }

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError ) {
//     if(!this.pizzas.includes(pizzaName)) {
//       return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     } 
//     return onSuccess(pizzaName)
// }
// }


// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// };

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // // Method calls with callbacks

// // pizzaPalace.order("Smoked", makePizza, onOrderError);
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);

// console.log(
// //   pizzaPalace.order("Smoked", makePizza, onOrderError)
// )


// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number, index){
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }


// console.log(filterArray([1, 2, 3, 4, 5], 3))


// function changeEven(numbers, value) {
//   // Change code below this line
//   newNumbers = [];
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       sum = numbers[i] + value;
//       newNumbers.push(sum);
//     } else {
//       newNumbers.push(numbers[i]);
//     }
//   }
//   return newNumbers;
//   // Change code above this line
// }


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = [];

// planets.map();

// element => planetsLengths.push(element.length)

// console.log(changeEven([1, 2, 3, 4, 5], 10))


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = [];

// planets.map(planet => planetsLengths.push(planet.length));

// console.log(planetsLengths);

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// color = "blue";

// const getUsersWithEyeColor = (users, color) => {
 

//   console.log(users => users.filter( user => user.eyeColor === color))
//   };


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((prev, number) => 
// prev + number
// );

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime)




// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalTime = players.reduce((total, player) => {
//   return total + player.playtime;
// }, 0);

// const totalgames = players.reduce((total, player) => {
//   return total + player.gamesPlayed;
// }, 0);


// const totalAveragePlaytimePerGame = totalTime / totalgames;

// console.log(totalAveragePlaytimePerGame)

// const calculateTotalBalance = users => {
//   users.reduce((total, number) => {
//    total + number.balance
//  } )
// };



// class Storage {
//   constructor({items}) {
//       this.items = items
//   }
//   getItems() {
//       return this.items
//   }
//   addItem(newItem) {
//      this.items.push(newItem)
//   }
//   removeItem(itemToRemove) {
//       const index = this.items.indexOf(itemToRemove)
//       this.items.splice(index, 1)
//   }
// };

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// // storage.addItem("Droid");
// // console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // storage.removeItem("Prolonger");
// // console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
