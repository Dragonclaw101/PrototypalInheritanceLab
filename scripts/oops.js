'use strict';

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.return = function(){

    let returnString = `${this.name} is ${this.age} years old`;
    console.log(returnString);
}


let person1 = new Person('Alice', 23);
let person2 = new Person('Max', 17);
let person3 = new Person('Anthony', 35);

person2.return();

function Employee(name, age){
    Person.call(this, name, age);
}

let employee1 = new Employee('Sandra', 26);

console.log(`${employee1.name} is ${employee1.age} years old`);