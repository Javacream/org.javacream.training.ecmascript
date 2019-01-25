//var simple = function(){}
function simple(param){
	print("function simple: param=" + param)
}

var simpleRef = function(param){
	print("function simpleRef: param=" + param)
}

var m = "Hugo"
m = "Emil"
m = "Fritz"

var demo = function(p){
	print("demo: one param, p=" + p);
}
demo = function(p1, p2){
	print("demo: two params, p1=" + p1 + ", p2=" + p2);
}
demo = function(){
	print("demo: no param");
}
	

demo("A")
demo("A", "B")
demo()


function Person(lastname, firstname){
	this.lastname = lastname;
	this.firstname = firstname;
	this.sayHello = function(){
		return "Hello, my name is " + this.lastname;
	}
}
Person.prototype = {}
Person.prototype.info = function(){
	return "Person: lastname=" + this.lastname;
}

var p = new Person("Sawitzki", "Rainer")

print(p.sayHello());
print(p.info())

p.greet = function(){
	return "Greetings from " + this.lastname; 
}
print(p.greet())

var n1 = 42
var n2 = new Number(42)
var n3 = n1.constructor(42)
print(n3)
print (n3.constructor)
var people = [
	new Person("Sawitzki", "Rainer"),
	new Person("Mustermann", "Hans"),
	new Person("Pausenkarten", "Pascal"),
	new Person("Metzger", "Karl"),
]



var obj = {

}

print("Value of obj.name: " + obj.name)


obj.name = null;
print("Value of obj.name: " + obj.name)

delete (obj.name)
print("Value of obj.name: " + obj.name)

if(obj.name != undefined){
	print ("DEFINED")
}else{
	print("UNDEFINED")

}
obj.name = null;
if(obj.name){
	print ("DEFINED")
}else{
	print("UNDEFINED OR NULL")

}

for (let i = 0; i < 10; i++){
	//...
}

print(i)