let people = []
let person
let index = -1
let slot
let previousButton
let nextButton
let peopleSlot
function init(){
    people.push(new Person("Sawitzki", "Rainer", "m", 183))
    people.push(new Person("Meier", "Hans", "m", 198))
    people.push(new Person("Schneider", "Hanna", "f", 176))
    slot = document.getElementById("slot")
    peopleSlot = document.getElementById("peopleSlot")
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

function load(){
    fetch("http://172.17.9.17:8080/people").then((result) => result.json()).then((people) => updatePeopleSlot(people))  
}
function updatePeopleSlot(people){
    let peopleHtml = "<ul>"
    for (let i = 0; i < people.length; i++){
        peopleHtml = peopleHtml + `<li>${people[i].lastname}</li>`
    }
    peopleHtml = peopleHtml + "</ul>"
    peopleSlot.innerHTML = peopleHtml
}
init()
