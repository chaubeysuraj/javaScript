let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// conversion in number--->
// "33" => 33
// "33abc" => NaN (Not a number)
// "null" => 0
// "undefined" => NaN
// true => 1 , false=> 0

let isLonggedIn = 1

let booleanIsLoggedIn = Boolean(isLonggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0=> false
//  "" => false 
// "suraj" => true

let someNumber =33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


