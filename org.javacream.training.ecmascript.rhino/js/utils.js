Array.prototype = {}
Array.prototype.info= function(){
	print("Hello, I am an Array");
}

function dumpObject(obj){
	print("dumping object " + obj)
	var attributeNames = Object.keys(obj)
	attributeNames.forEach(function(attr){
		print(attr + "=" + obj[attr]);
	});
}

dumpObject({demo: "damo", info: 42, fn: function(){}});
