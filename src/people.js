let person1 = {
    lastname: "Sawitzki",
    firstname: "Rainer", 
    gender: "m",
    height:183, 
    sayHello: function(){
        return "Hello!"
    }, 
    info: function(){
        return `Lastname: ${this.lastname}, Firstname: ${this.firstname}`
    }, 

    infoAsJSON: function(){
        return JSON.stringify(this)
    }
}

console.log(person1.infoAsJSON())

function classic(){

}

let referenceWithFunctionLiteral = function(){

}
//Moderne Variante, die Arrow-Function
let referenceWithArrowFunction = () => {

}
