//.charAt() - returns the character at the specified index in a string

const str = 'hello';
const char = str.charAt(1);
console.log(char); // "e"
//.charCodeAt() - returns the Unicode value of the character at the specified index in a string

const str = 'hello';
const code = str.charCodeAt(1);
console.log(code); // 101
//.concat() - concatenates two or more strings

const str1 = 'hello';
const str2 = 'world';
const str3 = str1.concat(' ', str2);
console.log(str3); // "hello world"
//.endsWith() - checks if a string ends with the specified suffix

const str = 'hello world';
const endsWithWorld = str.endsWith('world');
console.log(endsWithWorld); // true
//.includes() - checks if a string includes the specified string or character

const str = 'hello world';
const includesHello = str.includes('hello');
console.log(includesHello); // true
//.indexOf() - returns the index of the first occurrence of the specified string or character

const str = 'hello world';
const indexOfWorld = str.indexOf('world');
console.log(indexOfWorld); // 6


//.lastIndexOf() - returns the index of the last occurrence of the specified string or character

const str = 'hello world, hello universe';
const lastIndexOfHello = str.lastIndexOf('hello');
console.log(lastIndexOfHello); // 18
//.localeCompare() - compares two strings in the current locale

const str1 = 'hello';
const str2 = 'world';
const comparison = str1.localeCompare(str2);
console.log(comparison); // -1
//.match() - searches for a match between a regular expression and a string

const str = 'hello world';
const regex = /\w+/g;
const matches = str.match(regex);
console.log(matches); // ["hello", "world"]
//.padEnd() - pads the end of a string with a specified string or character, if the original string is shorter than the specified length

const str = 'hello';
const padded = str.padEnd(10, ' world');
console.log(padded); // "hello world"
//.padStart() - pads the start of a string with a specified string or character, if the original string is shorter than the specified length

const str = 'world';
const padded = str.padStart(10, 'hello ');
console.log(padded); // "hello world"
//.repeat() - repeats a string a specified number of times

const str = 'hello';
const repeated = str.repeat(3);
console.log(repeated); // "hellohellohello"
//.replace() - replaces a specified value with another value in a string

const str = 'hello world';
const replaced = str.replace('world', 'universe');
console.log(replaced); // "hello universe"
//.search() - searches for a match between a regular expression and a string, and returns the index of the match

const str = 'hello world';
const regex = /world/;
const indexOfMatch = str.search(regex);
console.log(indexOfMatch); // 6

// String.prototype.slice() - extracts a section of a string and returns a new string

const str = 'hello world';
const sliced = str.slice(6);
console.log(sliced); // "world"
// String.prototype.split() - splits a string into an array of substrings

const str = 'hello world';
const words = str.split(' ');
console.log(words); // ["hello", "world"]
// String.prototype.startsWith() - checks if a string starts with the specified prefix

const str = 'hello world';
const startsWithHello = str.startsWith('hello');
console.log(startsWithHello); // true
// String.prototype.substr() - extracts a specified number of characters from a string, starting at a specified index

const str = 'hello world';
const substr = str.substr(6, 5);
console.log(substr); // "world"
// String.prototype.substring() - extracts a specified part of a string

const str = 'hello world';
const substring = str.substring(6, 11);
console.log(substring); // "world"
// String.prototype.toLowerCase() - converts a string to lowercase

const str = 'HELLO WORLD';
const lowercase = str.toLowerCase();
console.log(lowercase); // "hello world"