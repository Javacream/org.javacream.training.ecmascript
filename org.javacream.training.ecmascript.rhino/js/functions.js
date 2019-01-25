var i = 0;

function outer(){
    var name = "Hugo";
    for (j = 0; i < 5; i++){

    }
}

for (; i < 5; i++){

}

var obj = {
    name: "Hello",
    name2: "World"

}
for each (value in obj){
    print(value)
}

var attrs = Object.keys(obj)

attrs.forEach(function (attr){
    print(attr + "=" + obj[attr])
})