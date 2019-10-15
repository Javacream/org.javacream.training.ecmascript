function callback(fn){
    fn()
}

function demo(){
    console.log("Hello")
}

callback(demo)

function demoWithVars(){
    let message = "In Demo Vars"
    console.log(message)
}

callback(demoWithVars)


let p = new Person("Sawitzki", "Rainer", "m", 183)
console.log(p.infoAsJSON())
callback(p.infoAsJSON)
