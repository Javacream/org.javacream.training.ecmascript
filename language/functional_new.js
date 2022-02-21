//"use strict"
function Person(lastname){
    this.lastname = lastname
    //return this
}

function say_hello(){
    return "Hello"
}

let p = new Person("Sawitzki")
console.log(p)
console.log(say_hello())