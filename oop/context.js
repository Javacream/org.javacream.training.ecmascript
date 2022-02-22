let Person = class {
    static number_of_people = 0
    constructor(lastname, firstname){
        this.lastname = lastname
        this.firstname = firstname
        this.greet = this.greet.bind(this)
    }
    greet(){
        return `Hello, my name is ${this.lastname}`
    }

    say_hi(){
        return "info from a person instance"
    }
}

function print_info(callback){
    console.log(callback())
}


let classic = function() {
    return "info from classic function"
}

let arrow = () => {
    return "info from arrow function"
}

let p = new Person("Eg", "Al")

print_info(classic)
print_info(arrow)
print_info(p.say_hi)
console.log(p.greet())
print_info(p.greet)