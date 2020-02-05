const person = {
    name: 'Niko',
    age: 33,
    greet() {
        console.log('Hi I\'m ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);
// // person.greet()
// copiedPerson = {...person}
// console.log(copiedPerson)

const hobbies = ['Sports', 'Cooking'];
const [ hobby1, hobby2 ] = hobbies;
console.log(hobby1, hobby2)

// // for (let hobby in hobbies) {
// //     console.log(hobby);
// // }

// // const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies]
// console.log(copiedArray)

// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1,2,3,4))