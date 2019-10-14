"use strict"
function Person(l, f, g, h) {
        this.lastname= l
        this.firstname = f 
        this.gender = g
        this.height = h
        this.info= function(){
            return `Lastname: ${this.lastname}, Firstname: ${this.firstname}`
        }, 
    
        this.infoAsJSON = () =>{
            return JSON.stringify(this)
        }
        //Object.freeze(this)
}
