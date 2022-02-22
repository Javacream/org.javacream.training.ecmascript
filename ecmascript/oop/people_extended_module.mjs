export class Person {
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

