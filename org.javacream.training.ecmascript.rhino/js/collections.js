function collections_test(){
	var list = ["Emil", "Horst", "Egon", "Hugo"]

	var iterationStep = function(value){
		print("Value: " + value)
	}
	var filtersH = function(element){
		return element.startsWith("H");
	}		
	var lengthMapper = function (element){
		return element.length;
	} 

//	list.forEach(iterationStep);

	list.filter(filtersH).map(lengthMapper).forEach(iterationStep);

	// list.filter(function(element){
	// 	return element[0] == "H";
	// }		).map(function (element){
	// 	return element.length;
	// } ).forEach(function(value){
	// 	print("Value: " + value);
	// });
}

String.prototype={}
String.prototype.startsWith = function(criterion){
	return this[0] == criterion;
}
//collections_test()
print("Hugo".startsWith("E"));

var d = new Date()
Date.prototype = {}
Date.prototype.hello = function(){print("Hello Date!")};
d.hello();

function Person(lastname, firstname){
	this.lastname = lastname;
	this.firstname = firstname;
	this.sayHello = function(){
		return "Hello, my name is " + this.lastname;
	}
}
Person.prototype = {};
Person.prototype.info = function(){
	return "Person: lastname=" + this.lastname;
}

var p = new Person("Sawitzki", "Rainer");

print(p.sayHello());
print(p.info());

p.greet = function(){
	return "Greetings from " + this.lastname; 
};

print(p.greet())

var people = [
	new Person("Sawitzki", "Rainer"),
	new Person("Mustermann", "Hans"),
	new Person("Pausenkarten", "Pascal"),
	new Person("Metzger", "Karl"),
]

people.sort(function (p1, p2){
	return p1.lastname.localeCompare(p2.lastname);
}).forEach(function(p) {
	print(p.lastname)
	});