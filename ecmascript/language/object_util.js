Object.prototype.getAllProperties = function(){
    const ownProperties = Object.getOwnPropertyNames(this)
    const prototypeProperties = Object.getOwnPropertyNames(this.constructor.prototype)
    return new Set(ownProperties.concat(prototypeProperties).sort())
}
Object.prototype.getAllConstructorProperties = function(){
    return new Set(Object.getOwnPropertyNames(this.constructor).sort())
}
Object.prototype.getAllMethods = function(){
    const ownProperties = Object.getOwnPropertyNames(this)
    const prototypeProperties = Object.getOwnPropertyNames(this.constructor.prototype)
    return new Set(ownProperties.concat(prototypeProperties).filter(name => typeof this[name] == 'function').sort())
}
Object.prototype.getAllAttributes = function(){
    const ownProperties = Object.getOwnPropertyNames(this)
    const prototypeProperties = Object.getOwnPropertyNames(this.constructor.prototype)
    return new Set(ownProperties.concat(prototypeProperties).filter(name => typeof this[name] != 'function'))
}

//console.log(Object.getOwnPropertyNames([]))
//console.log([].getAllProperties())
//console.log([].getAllMethods())
//console.log([].getAllAttributes())
//console.log([].getAllConstructorProperties())
console.log("Hugo".getAllMethods())