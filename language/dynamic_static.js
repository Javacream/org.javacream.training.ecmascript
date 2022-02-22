"use strict";
let person = {
    lastname: "Sawitzki", 
    firstname: "Rainer"
}
//Object.freeze(person) //Keine Schreiboperationen und keine neuen Attribute
//Object.seal(person) //Keine neuen Attribute und keine Änderungen der Konfiguration vorhandener Attribute
Object.preventExtensions(person) //Keine neuen Attribute 
person.lastname = "Meier"
//person.height = 183

console.log(person)