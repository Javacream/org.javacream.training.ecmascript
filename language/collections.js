function demo_array(){
    let names = ["Hugo", "Emil", "Hugo"]
    console.log(names)
}

function demo_set(){
    let names = new Set(["Hugo", "Emil", "Hugo"]) //Set ist eine so genannte Konstruktor-Funktion
    console.log(names)
}

function demo_map(){
    let postal_codes = new Map() //Map ist eine so genannte Konstruktor-Funktion
    postal_codes.set(81371, "München")
    postal_codes.set(30111, "Berlin")
    console.log(postal_codes)
}

demo_array()
demo_set()
demo_map()