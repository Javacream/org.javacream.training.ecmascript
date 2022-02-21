function demo(p){
    console.log("called demo, one param " + p)
}

demo = function(p1, p2){
    p1 = arguments[0]
    p1 = arguments[1]

    console.log("called demo, two params " + p1 + ", " + p2)

}

demo = function(){
    console.log("called demo, no params, arguments " + arguments.length)
}


demo()
demo('Hello')
demo('Hello', 42)


let person = {
    lastname: "Sawitzki", 
    say_hello: function(){
        console.log("Hello")
    }
}

console.log(person.lastname)
person.say_hello()
console.log(person)


//Die Arrow-Syntax für Funktionen, eine andere Form des Funktions-Literals
demo = () =>{
    console.log("called demo, no params, arguments " + arguments.length)
}
