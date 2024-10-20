class Animal {
    #key = 1
    normalKey = 2
    say() {
        console.log(this.#key)
    }
}
const a = new Animal()
a.say()
// console.log(a.#key) // SyntaxError: Private field '#key' must be declared in an enclosing class
// console.log(Object.getOwnPropertyNames(a)) // [ 'normalKey' ]