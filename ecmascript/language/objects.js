let person = {}
//Objekt sind ohne weitere Aktionen dynamisch
person.lastname = "Sawitzki"
person.firstname = "Rainer"
person.greet = function (){ return `Hello, my name is ${this.lastname}`} //TODO: Später hierzu ein Detail
//console.log(person.greet())


let person2 = {
    lastname: "Mustermann",
    firstname: "Rainer",
    greet: function (){ return `Hello, my name is ${this.lastname}`} //TODO: Später hierzu ein Detail
}
//console.log(person2.greet())


function Person(lastname, firstname){
    this.lastname = lastname
    this.firstname = firstname
       
}

Person.prototype = {
    greet: function (){ return `Hello, my name is ${this.lastname}`} //TODO: Später hierzu ein Detail

}

let p1 = new Person("Schneider", "Hanna")
let p2 = new Person("Meier", "Josef")
p1.height = 177
p1.greet = function(){return "egal"}
//console.log(p1.greet())
//console.log(p2.greet())

Person.prototype.demo = function(){return "from demo"}
//console.log(p1.demo())


let names = ["Hugo", "Emil"]
names.push("Fritz")
//console.log(names.length)

let names2 = ["Hans"]
//console.log(names2.length())

Array.prototype.size = function(){
    return this.length
}

console.log(names2.size())

console.log(Object.getOwnPropertyNames(names))


