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