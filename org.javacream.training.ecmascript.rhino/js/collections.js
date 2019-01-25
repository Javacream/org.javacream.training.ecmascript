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