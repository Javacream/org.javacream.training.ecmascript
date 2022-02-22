class Person{
    constructor(lastname, firstname){
        this.lastname = lastname
        this.firstname = firstname
    }
    greet(){
        return `Hello, my name is ${this.lastname}`
    }
}

let p = new Person("Sawitzki", "Rainer")
console.log(p)
console.log(p.greet())