//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let objectParser = (obj) => {
    let keys = Object.keys(obj)
    for(let i = 0; i < keys.length; i++){
        if(obj[keys[i]] instanceof Array){
            for(let j = 0; j < obj[keys[i]].length; j++){
                if(obj[keys[i]][j] instanceof Object){
                    objectParser(obj[keys[i]][j]);
                }
                else{
                    console.log(obj[keys[i]][j])
                }
            }
        }
        else if(obj[keys[i]] instanceof Object){
            objectParser(obj[keys[i]])
        }
        else{
            console.log(obj[keys[i]])
        }
    }
}

objectParser(person3);
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name
    this.age = age

    this.printInfo = () => {
        console.log(this.name)
        console.log(this.age)
    }

    this.addAge = () => {
        this.age++
    }
}

// Use an arrow to create the printInfo method
let person1 = new Person('Dylan', 22)
let person2 = new Person('Fatima', 24)
person1.printInfo()
person2.printInfo()
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
person1.addAge()
person1.printInfo()
person1.addAge()
person1.printInfo()
person1.addAge()
person1.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let stringChecker = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length > 10){
            resolve('Big word')
        }
        else{
            reject('Small Number')
        }
    })
}

stringChecker("spectacular")
.then( (result) => {
    console.log(result)
})
.catch( (error) => {
    console.log(error)
})

