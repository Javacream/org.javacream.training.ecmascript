"use strict"
let p1 = new Person("Sawitzki", "Rainer", "m", 183)
let p2 = new Person("Meier", "Hans", "m", 189)
console.log(p1.infoAsJSON())
console.log(p2.infoAsJSON())
p1.address = "Hier"
console.log(p1.infoAsJSON())
