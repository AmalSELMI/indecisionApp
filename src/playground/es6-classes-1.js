// Setup constructor to take name and age(default to 0)
// getDescription - Amaru is 28 years old.
class Person {
constructor(name = 'Defaulto', age = 0){
    this.name = name;
    this.age = age;
    // this allows the setting of the values passed in
 }
 getGreeting() {
    //  return 'Hi ' + this.name + '!';
    return `Hi ${this.name}!`
 }

getDescription() {

    return ` Hey, ${this.name} is ${this.age} years old.`
}
}

class Student extends Person { 
    constructor(name, age, major) {
     super(name, age);
    // super: calls the parent element > Person.constructor >>name&age setting
      this.major = major;
}
    hasMajor() {
        return !!this.major;
     // flipping twice with ! returns the boolean value
}
    getDescription(){

        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `Their major is ${this.major}.`
        }
        
    return description
    }
}

const me = new Student('Amaru', 28,'accounting');
console.log(me.getGreeting());
// // console.log(me.getDescription());

// let other= new Student();
// console.log(other.getGreeting());
// console.log(other.getDescription());
// console.log(other.getDescription());
// console.log(other.getGreeting())


// Challenge: create sub class: Traveler -> Person
// Add support for homeLocation (3rd arg like major for student)
// Override getGreeting
//I am Amaru, i'm visiting from Paris || I am Amaru

class Traveler extends Person {
    constructor(name,age,homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += `I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}
const trav = new Traveler ('Nido', 26, 'Arizona');
console.log(trav.getGreeting());

const other= new Traveler('Nico', 32, 'nowhere');
console.log(other.getGreeting());