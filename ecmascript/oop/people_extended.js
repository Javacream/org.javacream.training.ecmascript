class Person {
    constructor(lastname, firstname){
        this.lastname = lastname
        this.firstname = firstname
    }
    marry(partner){
        if (!partner){
            throw new Error("no partner")
        }
        if (partner == this){
            throw new Error("cannot marry myself")
        }
        if (this.partner){
            throw new Error("already married")
        }
        if (partner.partner){
            throw new Error("partner is married")
        }
        this.partner = partner
        partner.partner = this
    }
    divorce(){
        if(!this.partner){
            throw new Error("i am not married")
        }
        delete this.partner.partner
        delete this.partner
    }
}

let charles = new Person("Prince", "Charles")
let dianna = new Person("Lady", "Di")
let camilla = new Person("Lady", "Camilla")

charles.marry(dianna)
try{
    charles.marry(camilla)
}catch(e){
   console.log(e.message) 
}
charles.divorce()
try{
    charles.marry(charles)
}catch(e){
   console.log(e.message) 
}
charles.marry(camilla)
