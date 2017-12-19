function Person(name, surname){
    this.health = 50
    this.name = name
    this.surname = surname
}

Person.prototype.sayHello = function(){
    console.info(`Greetings from ${this.name}`)
}

function Doctor(name, surname){
    Person.call(this, name, surname)
    this.hospital = 'Main'
}

Doctor.prototype = Object.create(Person.prototype) // kopiuje cały prototyp z Person do Doctor
Doctor.prototype.constructor = Doctor // podmienienie constructor'a w Doctor by był dla Doctora a nie dla Person
Doctor.prototype.cure = function (person) {
    if(person instanceof Person === false)
        throw new Error(`Can't cure`)
    
    person.health += 10
}

/* 
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects
 */