const marryFunction = function(partner){
    this.partner = partner
    partner.partner = this
    this.divorce = divorceFunction
    delete(this.marry)
}
const divorceFunction = function(){
    delete(this.partner.partner)
    delete(this.partner)
    this.marry = marryFunction
    delete(this.divorce)
}

let p1 = {
    lastname: "Sawitzki", 
    marry: marryFunction
}

let p2 = {
    lastname: "Fabricius", 
    marry: marryFunction
}
let p3 = {
    lastname: "Schneider", 
    marry: marryFunction
}

p1.marry(p2)
console.log(p1.partner.lastname)
console.log(p2.partner.lastname)
p2.marry(p3) //-> p2 hat keine Marry-Funktion


