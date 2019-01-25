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


var n1 = 42
var n2 = new Number(42)
var n3 = n1.constructor(42)
print(n3)
print (n3.constructor)

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

var o1 = "0"
var o2 = 0
print("o1==o2" + (o1 == o2))
print("o1===o2" + (o1 === o2))
