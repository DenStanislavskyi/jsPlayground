// Module formats
//  - AMD / Asynchronous Module Definition (Browser)
//  - CommonJS (Node)
//  - UMD / Universal Module Definition (Browser + Node)
//  - ES6 Modules 

// CommonJS (Used in Node)
// Exporting 
module.exports.Cirlce = Circle; 
// Importing 
const Circle = require('./circle');

// ES6 Modules (Used in Browser)
// Exporting
export class Square {}
// Importing 
import {Square} from './square'; 
