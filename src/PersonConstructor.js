function Person(l, f, g, h) {
        this.lastname= l
        this.f = f 
        this.gender = g
        this.height = h
        this.info= function(){
            return `Lastname: ${this.lastname}, Firstname: ${this.firstname}`
        }, 
    
        this.infoAsJSON = function(){
            return JSON.stringify(this)
        }
}
