class Person{
  name:string
  height:number
  constructor(name:string, height:number){
    this.name = name
    this.height = height
  }
  sayHello():string{
    return "Hello, my name is " + this.name
  }
}
