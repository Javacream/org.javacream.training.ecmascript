import {demo as sum, Person} from './otherFile.js';

console.log(sum(20, 22));
let p = new Person ("Meier")
console.log(p.greet())

document.querySelector('#app').innerHTML = 'Hello from your JavaScript file ...';
