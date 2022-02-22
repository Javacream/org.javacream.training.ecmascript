let Person = class {
    static number_of_people = 0
    constructor(lastname, firstname){
        this.lastname = lastname
        this.firstname = firstname
            Person.number_of_people++
    }
    greet(){
        return `Hello, my name is ${this.lastname}`
    }
}

let p = new Person("Sawitzki", "Rainer")
let p2 = new Person("Mustermann", "Hannah")
//console.log(p)
//console.log(p.greet())
//console.log(typeof p)
//console.log(p.constructor)

//p.height = 183
//delete p.lastname

console.log(p)
console.log(p.constructor)
console.log(Person.number_of_people)
Person.prototype.say_hi = function(){return "Hi"}
console.log(p.say_hi())


class Student extends Person{
    constructor(lastname, firstname, university){
        super(lastname, firstname)
        this.university = university
    }

    study(){
        return `${this.greet()}, i study at ${this.university}`
    }
}


let s1 = new Student("Einstein", "Alberta", "LMU")
console.log(s1)