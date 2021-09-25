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

console.log("favorite foods are:")

showfavorite(person3);
function showfavorite(theObject) {
    var count = 0;
    Object.keys(theObject).forEach((key) => {
        count = count + 1;
        if (key == "shakes") {
            console.log("-------", key, "------")
            showfavorite(theObject[key][0])
        } else{
            console.log(key + ' -> ' + theObject[key]);
        }
    })
}


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

function Person(name , age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method

    this.printInfo = () => {
        return "Name: " + this.name + " Age: " + this.age
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    this.incrementAge = (age = 1) => {
        return this.age + age;
    }
}

const person1 = new Person("John Lee", 20);
const person2 = new Person("Doe James", 30);
console.log(person1.printInfo())
console.log(person2.printInfo())
console.log(person2.incrementAge(3))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkString = (params) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (params.length > 10) {
                resolve("Big word");
            } else if (params.length < 10) {
                resolve("Small number");
            } else {
                reject("Not a string")
            }
        }, 1000);
    })
};

let getResult = async (params) => {
    let value = await checkString(params);
    console.log(value);
}

getResult("testingtesting")
