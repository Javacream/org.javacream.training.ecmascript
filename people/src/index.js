import PubSub from 'pubsub-js'
export default class Person{
    hugo=42
    constructor(name){
      this.name = name
    }
  
    greet = () => {
        
      return `Hello from ${this.name}`
    }
  }