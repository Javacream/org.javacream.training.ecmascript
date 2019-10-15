function simple(){
    let message = "Hello"
    let names = ["Hugo", "Emil", "Fritz"]
    demoString(message)
    console.log(message)
    demoList( names)
    console.log(names[0])
    demoList2(names)
    console.log(names[0])
}
function demoString(p){
    console.log(p)
    p = "CHANGED"
    console.log(p)
}

function demoList(list){
    console.log(list[0])
    list = ["Franz"]
    console.log(list[0])
}

function demoList2(list){
    console.log(list[0])
    list[0] = "Franz"
    console.log(list[0])
}

simple()

function functionVariables(){
    //Function Scoped Variable der Function functionVariables
    let message = "Hello"
    //Auch inner ist eine Function Scoped Variable der Function functionVariables

    let inner = function (){
        console.log(message)      
    }
    return inner
}

let returnFunc = functionVariables()
returnFunc()

function functionVariables2(message){
    let inner = function (){
        console.log(message)      
    }
    return inner
}

let f1 = functionVariables2("Hello")
let f2 = functionVariables2("World")

f1()
f2()
f1()
//console.log(message) kein Zugriff möglich