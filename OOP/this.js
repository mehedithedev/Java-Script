// The 'This' keyword
function Sentence(words){ // First of all we have to create a constructor function
    this.words=words; // this keyword is used to refer to the current object.
    console.log(this) // this keyword refers to the current object.
    this.getWords=function(){ 
        return this.words; 
    }
}
const firstString= new Sentence('Hello world')

console.log(this) // it is equal to the global string that is window object.
const user= {
    name: 'John',
    getName(){
        console.log(this)
    }
}
user.getName() //   

function Car(color, brand, wheels){
    this.color = color
    this.brand = brand
    this.wheels = wheels
    console.log(this)
}
const bluecar= new Car('blue', 'BMW', 4)
const redCar= new Car('red', 'Audi', 6)