// //  Using object literals:
const obj = {};
////  Using the Object constructor:

const obj = new Object();
//  Using the Object.create() method:

const obj = Object.create(null);
//  Using the Object.assign() method:

const obj = Object.assign({}, {});
//  Using class syntax:

class MyClass { }
const obj = new MyClass();
//  Using factory functions:

function createObject() {
    return {};
}
const obj = createObject();
//  Using the Object.fromEntries() method:

const obj = Object.fromEntries(new Map());
//  Using the spread operator:

const obj = { ...{} };

//  Using destructuring assignment:

const obj = {};
const { a, b, ...rest } = obj;
//  Using the Object.defineProperties() method:

const obj = Object.defineProperties({}, {
    property1: {
        value: 'foo',
        writable: true
    },
    property2: {
        value: 'bar',
        writable: false
    }
});
//  Using the Object.defineProperty() method:

const obj = {};
Object.defineProperty(obj, 'property1', {
    value: 'foo',
    writable: true
});
Object.defineProperty(obj, 'property2', {
    value: 'bar',
    writable: false
});
//  Using the Reflect.construct() method:

const obj = Reflect.construct(Object, []);
//  Using the Reflect.create() method:

const obj = Reflect.create(Object, {});
//  Using the Symbol() function:

const sym = Symbol();
const obj = { [sym]: 'foo' };

//  Using the Map() constructor:

const obj = new Map();
//  Using the Set() constructor:

const obj = new Set();
//  Using the WeakMap() constructor:

const obj = new WeakMap();
//  Using the WeakSet() constructor:

const obj = new WeakSet();
//  Using the Proxy() constructor:

const obj = new Proxy({}, {});
//  Using the Promise() constructor:

const obj = new Promise((resolve, reject) => { });

//  Using the Date() constructor:

const obj = new Date();
//  Using the RegExp() constructor:

const obj = new RegExp('^[0-9]+$');
//  Using the Array() constructor:

const obj = new Array(5);
//  Using the Int8Array() constructor:

const obj = new Int8Array(5);
//  Using the Uint8Array() constructor:

const obj = new Uint8Array(5);
