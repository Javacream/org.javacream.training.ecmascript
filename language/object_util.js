Object.prototype.getAllProperties = function(){
    const ownProperties = Object.getOwnPropertyNames(this)
    const prototypeProperties = Object.getOwnPropertyNames(this.constructor.prototype)
    return new Set(ownProperties.concat(prototypeProperties))
}
Object.prototype.getAllMethods = function(){
    const ownProperties = Object.getOwnPropertyNames(this)
    const prototypeProperties = Object.getOwnPropertyNames(this.constructor.prototype)
    return new Set(ownProperties.concat(prototypeProperties).filter(name => typeof this[name] == 'function'))
}
Object.prototype.getAllAttributes = function(){
    const ownProperties = Object.getOwnPropertyNames(this)
    const prototypeProperties = Object.getOwnPropertyNames(this.constructor.prototype)
    return new Set(ownProperties.concat(prototypeProperties).filter(name => typeof this[name] != 'function'))
}

console.log("Hugo".getAllProperties())
console.log([].getAllProperties())
console.log([].getAllMethods())
console.log([].getAllAttributes())