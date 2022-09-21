/* Your Code Here */





// const workCardObject = {
//     name:
// }


const array = ['Karina', 'Henriquez', 'OT', 35];

// const workCardObject = {
//     firstName: array[0],
//     familyName: array[1],
//     title: array[2],
//     payPerHour: array[3],
//     timeInEvents: [],
//     timeOutEvents: []
// }

// function obj() {
//     return this
// }

// const originalObj = obj.bind(workCardObject);
// console.log(originalObj().timeInEvents)




function createEmployeeRecord(array) {

    const workCardObject = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }



    return workCardObject
}

function createEmployeeRecords(arrayOfArrays) {
    const newArray = arrayOfArrays.map((element)=>createEmployeeRecord(element))
    return newArray
}



function createTimeInEvent (event) {
    let [dateStamp, hourIn] = event.split(' ')
    console.log(dateStamp)
    const hour1 = parseInt(hourIn)
    console.log(hourIn)
        let obj = {
            type: 'TimeIn',
            hour: hour1,
            date: dateStamp
        }
    // console.log(event)
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent (event) {
    let [dateStamp, hourOut] = event.split(' ')
    // console.log(dateStamp)
    const hour1 = parseInt(hourOut)
    // console.log(hourIn)
        let obj = {
            type: 'TimeOut',
            hour: hour1,
            date: dateStamp
        }
    // console.log(event)
    this.timeOutEvents.push(obj)
    return this
}









// const fun = function (line) {
//     return `${this.name} just became a ${this.job}! ${line}`
// };

// const object1 = {
//     name: 'Anthony',
//     job: 'Software Engineer',
//     fun
    
    
// };

// const object2 = {
//     name: 'Karina',
//     job: 'Therapist',
//     fun
    
    
// };

// const line1 = `Amazing!!!`
// const line2 = 'Woow!'

// console.log(object1.fun(line1))
// console.log(object2.fun(line1))


// console.log(fun.call(object2, line1))

// const bindingTest = fun.bind(object1)
// console.log(bindingTest(line2))


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
};



















