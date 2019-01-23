function collections_test(){
	var list = ["Emil", "Horst", "Egon", "Hugo"]
	list.forEach(
			function(element, index){
				print(index+"=" + element)
			})
			
	var filtersH = function(element){
		return element[0] = "H"
	}		
	var lengthMapper = function (element){
		return element.length
	} 
	print(list.filter(filtersH).map(lengthMapper))
}
	
collections_test()