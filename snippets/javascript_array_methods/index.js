// Array.prototype.concat() - creates a new array by merging multiple arrays or values

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const newArr = arr1.concat(arr2, arr3);
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Array.prototype.every() - checks if every element in an array passes a test

const arr = [1, 2, 3, 4, 5];
const isEven = arr.every(val => val % 2 === 0);
console.log(isEven); // false
// Array.prototype.filter() - creates a new array with only the elements that pass a test

const arr = [1, 2, 3, 4, 5];
const evenNums = arr.filter(val => val % 2 === 0);
console.log(evenNums); // [2, 4]
// Array.prototype.forEach() - executes a function for each element in an array

const arr = [1, 2, 3, 4, 5];
arr.forEach(val => console.log(val)); // 1 2 3 4 5
// Array.prototype.includes() - checks if an array includes a certain value

const arr = [1, 2, 3, 4, 5];
const hasThree = arr.includes(3);
console.log(hasThree); // true
// Array.prototype.indexOf() - returns the first index at which a given element can be found in an array

const arr = [1, 2, 3, 4, 5];
const indexOfThree = arr.indexOf(3);
console.log(indexOfThree); // 2
// Array.prototype.join() - joins all elements of an array into a string

const arr = [1, 2, 3, 4, 5];
const joined = arr.join('-');
console.log(joined); // "1-2-3-4-5"
// Array.prototype.lastIndexOf() - returns the last index at which a given element can be found in an array

const arr = [1, 2, 3, 4, 5, 3];
const lastIndexOfThree = arr.lastIndexOf(3);
console.log(lastIndexOfThree); // 5
// Array.prototype.map() - creates a new array with the results of calling a provided function on every element in the array

const arr = [1, 2, 3, 4, 5];
const squared = arr.map(val => val ** 2);
console.log(squared); // [1, 4, 9, 16, 25]
// Array.prototype.pop() - removes the last element from an array and returns that element

const arr = [1, 2, 3, 4, 5];
const last = arr.pop()

// Array.prototype.push() - adds one or more elements to the end of an array and returns the new length of the array
// 
const arr = [1, 2, 3, 4, 5];
const length = arr.push(6, 7, 8);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(length); // 8
// Array.prototype.reduce() - applies a function against an accumulator and each element in the array to reduce it to a single value
// 
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 15
// Array.prototype.reverse() - reverses the order of the elements in an array

const arr = [1, 2, 3, 4, 5];
const reversed = arr.reverse();
console.log(reversed); // [5, 4, 3, 2, 1]
// Array.prototype.shift() - removes the first element from an array and returns that element

const arr = [1, 2, 3, 4, 5];
const first = arr.shift();
console.log(first); // 1
console.log(arr); // [2, 3, 4, 5]
// Array.prototype.slice() - extracts a section of an array and returns a new array

const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]
// Array.prototype.some() - checks if at least one element in an array passes a test

const arr = [1, 2, 3, 4, 5];
const hasEven = arr.some(val => val % 2 === 0);
console.log(hasEven); // true
// Array.prototype.sort() - sorts the elements of an array in place and returns the array

const arr = [5, 2, 1, 4, 3];
const sorted = arr.sort((a, b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5]
// Array.prototype.splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements

const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 3, 6, 7, 8);
console.log(removed); // [2, 3, 4]
console.log(arr); // [1, 6, 7, 8, 5]
// Array.prototype.toString() - returns a string representation of an array

const arr = [1, 2, 3, 4, 5];
const str = arr.toString();
console.log(str); // "1,2,3,4,5"