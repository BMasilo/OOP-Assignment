'use strict';
class Person {

        constructor(fullName, age, gender, interests, ...args) {
            
                this.name = fullName;
                this.age = age;
                this.gender = gender;
                this.interests = interests;
                this.greet = 'Hello my name is ' + fullName;
        }
        
    }
    var firstPerson = new Person('Nosipho Masondo', 8, 'female', 'Dancing, Singing');
    var secondPerson = new Person('Thando Ngwane', 16, 'Male', 'playing games and drawing');
    
    secondPerson.method =  secondPerson.greet + ' and I am ' + secondPerson.age + ' and my interests are ' + secondPerson.interests + '.'; 
