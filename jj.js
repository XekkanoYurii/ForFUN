function hello() {
    console.log('hello', this)
}
const person = {
    name: 'Max',
    age: 25,
    sayHello: hello
} 
console.log(person);