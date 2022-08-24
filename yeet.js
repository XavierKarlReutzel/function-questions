
const nameName  = 'Sak';

const speakName = name => {
    console.log(`Hello ${name}.`)
}
speakName(nameName); 

function randomNumber() {
    return Math.random();
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function add(a, b) {
    return a + b;
}

const result = add(2, 2)
console.log(add(2, 2))
console.log(4)
console.log(result)

function substract(a, b) {
    return a - b;
}

const personsAge = 21;

function checkAge(age) {
    if (age >= 21) {
        console.log('Yeah you can drink fuck face.');
    }   else if (age <= 21) {
        console.log('GET THE FUCK OUT OF THE BAR!');
    }
}
checkAge(personsAge);
checkAge(1000)

const nameAgain = 'Jordan';

function nameGen(name) {
    switch (name) {
        case 'Chago':
            return 'Rock Man.'
        case 'Krumpton':
            console.log('Tech God.')
            break;
        case 'Chadvier':
            console.log('Russian Horse.')
            break;
        case 'Jordan':
            console.log('Angel of Gains.')
            break;
        case 'Dimi':
            console.log('Goblin.')
            break;
        default:
            console.log('Plebian.')
            break;
    
    }
}

const myName = nameGen('jordan');

console.log(myName)
console.log(nameGen(nameAgain))



const ages = [22, 50, 13, 10, 80, 70, 23];
const years = [1999, 2000, 2022, 1980];


console.log(ages);

function sortArray(listToSort) {
    // algorithm to sort array
    return //sorted array
}

const sortedAges = sortArray(ages);
const sortedYears = sortArray(years);
