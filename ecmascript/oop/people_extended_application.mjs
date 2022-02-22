import {Person} from './people_extended_module.mjs'
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
