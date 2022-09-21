// This is practice

///////////


const fun = function (line) {
    return `${this.name} just became a ${this.job}! ${line}`
};

const object1 = {
    name: 'Anthony',
    job: 'Software Engineer',
    fun
    
};

const object2 = {
    name: 'Karina',
    job: 'Therapist',
    fun
    
};

const line1 = `Amazing!!!`
const line2 = 'Woow!'

console.log(object1.fun(line1))
console.log(object2.fun(line1))

console.log(fun.call(object2, line1))

const bindingTest = fun.bind(object1)
console.log(bindingTest(line2))


///////////********????????????


// const object1 = {
//     name: 'Anthony',
//     job: 'Software Engineer',
//     fun: function (line) {
//         return `${this.name} just became a ${this.job}! ${line}`
// }};

// const object2 = {
//     name: 'Karina',
//     job: 'Therapist',
//     fun: function (line){
//             return `${this.name} just became a ${this.job}! ${line}`
//     }
// };

// const line1 = `Amazing!!!`
// const line2 = 'Wooow!!'

// const bindingTest = object1.fun.bind(object1);


// console.log(object1.fun(line1))
// console.log(object2.fun(line2))

// console.log(object1.fun.call(object2, line1))

// console.log(bindingTest(line2))
