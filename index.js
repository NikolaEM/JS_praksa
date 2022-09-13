
// Create a function which has a `for` loop in it. Declare a variable with `var` inside the `for` loop. Log the variable to the console after the loop. What happened? 
// * Add a variable declared with `let` to the `for` loop. Log the variable to the console after the loop. What happened? 
// * Create a variable outside of the function.  Log the variable to the console inside the function. What happened?
// * Create a variable inside the function.  Log the variable to the console outside the function. What happened?

// function functionWithVar(){
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }
// return 
// }

// function functionWithLet(){
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// return 
// }

// var random = 'a';

// function logRandom(){
//     return console.log(random);
// }

// function insideVariable(){
//     var inside = 'b';
// }


// functionWithLet();
// functionWithVar();
// logRandom();
// console.log(inside);


// Using the built-in `map` array function and an anonymous function, square all items in a number array
// 2. Write an IIFE function using an anonymous function which sums two numbers and logs the sum out to the console 
// 3. Make this function an arrow function:
// ```
// function timesTwo(number) {
//   return number * 2
// }

// var array = [1,2,3,4,5];

// var square = array.map(function(e){
//     let squaredNumber = Math.pow(e,2);
    
//     return squaredNumber;
// })
// console.log(square);  

// const sum = (a,b) => a + b

// console.log(sum(2,3))

// const timesTwo = number => number * 2;

// console.log(timesTwo(4));

// Create an array of colours
// - Loop through the array using the `for` loop and log the colour to the console
// - Loop through the array using the `forEach` loop and log the colour to the console




// var array3 = ['blue', 'red', 'white', 'black'];

// for (let i = 0; i < array3.length; i++){
//     console.log(array3[i]);
// }

// array3.forEach(element => console.log(element))


// Write a function that will rotate an array to the right by a certain number of "steps".  


// const arr = [1,2,3,4,5];

// const rotate = (arr, count = 1) => {
//     return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
//   };
  
//   console.log(rotate(arr, -1)); 
//   2.
// const initialValue = 50;
// const sumWithInitial = arr.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
 
// 3.



// function numToArray(num) {
//     let arr = [num];

//     for(let i=num-1;i>=0;i--){
//         arr.push(i);
//         arr.unshift(i)
//     }
//     return arr;
// }

// console.log(numToArray(5))





        //  JS/JSON
        // Create a JS `person` object which contains `firstName`, `lastName` and `age`.
        // - Create that same object but in JSON format
        // - Use `JSON.parse` to convert the second object to a JS object
        // - Use `JSON.stringify` to convert the first object to a JSON object
        
        // - Create a JS array of numbers
        // - Create a JSON array of numbers
        // - Convert the second array to a JS array and loop over it.

// const person = {
//     firsName: 'Pera',
//     lastName: 'Peric',
//     age: '21',
// }

// const person1 = '{"firstName":"Pera", "lastName":"Peric", "age":21}'

// console.log(JSON.parse(person1))
// console.log(JSON.stringify(person))

// const array = [1,2,3,4]

// const array1 = '[1,2,3,4]'

// const parse = JSON.parse(array1)

// for (let i = 0; i < parse.length; i++){
//     console.log(parse[i]);
// }


        // PROMISE
//         Create a promise ( Use `setTimeout` to simulate the wait )
// - If promise resolves, write out `Success!` to the console
// - If promise fails, write out `Error!` to the console.

// var response = 2

// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         if(response < 3){
//             resolve(function()
//             {console.log("Success")})
//         }
//         else {
//             reject(function(){console.log("Error")})
//         }
//     }), 5000
// })

// console.log(myPromise)


        // JS Classes

//         Create a `PlayerCharacter` and a `NonPlayerCharacte`r with a common ancestor` Character`. The characters are located in a 10x10 game field, meaning they have `x` and `y` position. All characters appear at a random location. Create those three classes, and make sure you can query where each character is.
// 2. Make sure the `Character` class cannot be instantiated.
// 3. Add an option to set both `x` and `y` ( at the same time ) using a setter
// 4. Keep count of created characters using a static property
// Throw an error if the user tries to set x and y that are out of bounds ( 10x10 )


class Character {
    static count = 0;
  
    constructor() {
      if (this.constructor === Character) {
        throw new Error('Character can not be instantiated!');
      }
  
      Character.count++;
  
      this.x = Math.floor(Math.random() * 10) + 1;
      this.y = Math.floor(Math.random() * 10) + 1;
    }
  
    get position() {
      return `${this.x}x${this.y}`;
    }
  
    set position(coordinates) {
      if (coordinates[0] > 10 || coordinates[1] > 10) {
        throw new Error('Out of bound 10x10');
      }
  
      this.x = coordinates[0];
      this.y = coordinates[1];
    }
  }
  
  class PlayerCharacter extends Character {
    constructor() {
      super();
    }
  }
  
  class NonPlayerCharacter extends Character {
    constructor() {
      super();
    }
  }
  
  console.log(Character.count);
  const player1 = new PlayerCharacter();
  const player2 = new PlayerCharacter();
  const player3 = new PlayerCharacter();
  const player4 = new NonPlayerCharacter();
  const player5 = new NonPlayerCharacter();
  
  console.log(player1, player2, player3, player4, player5);
  console.log(Character.count);
  console.log(player1.position);
  console.log(player3.position);
