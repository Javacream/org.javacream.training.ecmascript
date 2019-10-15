let people = []
let person = null
let index = -1
let slot = null;
let previousButton = null;
let nextButton = null
function init(){
    people.push(new Person("Sawitzki", "Rainer", "m", 183))
    people.push(new Person("Meier", "Hans", "m", 198))
    people.push(new Person("Schneider", "Hanna", "f", 176))
    slot = document.getElementById("slot")
    previousButton = document.getElementById("previous")
    nextButton = document.getElementById("next")
    previousButton.setAttribute("disabled", "");
    previousButton.classList.add("button-inactive");
    nextButton.classList.add("button-active");
}

function updateSlot(){
    slot.innerHTML=`<p>Lastname: ${person.lastname} Firstname: ${person.firstname}`
    if (index > 0){
        previousButton.removeAttribute("disabled");
        previousButton.classList.remove("button-inactive")
        previousButton.classList.add("button-active")
    }else{
        previousButton.setAttribute("disabled", "");
        previousButton.classList.add("button-inactive")
        previousButton.classList.remove("button-active")
    }
    if (index < (people.length - 1)){
        nextButton.removeAttribute("disabled");
        nextButton.classList.remove("button-inactive")
        nextButton.classList.add("button-active")
    }else{
        nextButton.setAttribute("disabled", "");
        nextButton.classList.add("button-inactive")
        nextButton.classList.remove("button-active")
    }
}

function next(){
    if (people.length > (index + 1)){
        index++
        person = people[index]
    }
    updateSlot()
}
function previous(){
    if (index > 0){
        index--
        person = people[index]
    }
    updateSlot()
}

init()
