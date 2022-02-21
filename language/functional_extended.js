let say_hello = function(){return "Hello"}
let say_bye = function(){return "Goodbye"}

function demo(p1, p2){
    console.log(p1)
    console.log(p2)
    console.log(p1())
    console.log(p2())
}

demo(say_hello, say_bye)
//demo(say_hello, 42) //Laufzeitfehler: p2 is not a function
//demo("Sawitzki", 42)//Laufzeitfehler: p1 is not a function

demo(function(){return "Egon"}, function(){return 42})
demo(() => {return "Fritz"}, () => {return 4711})