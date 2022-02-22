class Person{
  lastname:string
  height:number
  firstname:string
  constructor(lastname:string, firstname:string, height:number){
    this.lastname = lastname
    this.height = height
    this.firstname = firstname
  }
  sayHello():string{
    return "Hello, my name is " + this.lastname
  }
}
