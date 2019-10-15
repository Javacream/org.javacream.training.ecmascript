"use strict"

class Person{

    constructor(l, f, g, h){
        this.lastname= l
        this.firstname = f 
        this.gender = g
        this.height = h
        this.info = this.info.bind(this)
    }

    info(){
        return `Lastname: ${this.lastname}, Firstname: ${this.firstname}`
    } 

    infoAsJSON = () =>{
        return JSON.stringify(this)
    }

}

