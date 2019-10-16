import {demo as sum} from './demo';
import Person from 'people'
console.log(sum(20, 22));
let p = new Person ("Prof. Dr. Brezner")
console.log(p.greet())

document.querySelector('#app').innerHTML = 'Hello from your JavaScript file ...';
