// break with var 
let balance = 1240;
balance = 1240;
const userName = 'janpakhi potas potas';
const weTogether = 'ami' + userName;
console.log(weTogether);
// userName = 'moyna pakhi';// not allowed
const numbers = [34, 6, 76, 98, 92];
// numbers = [4, 6, 8, 1]; // not allowed
numbers.push(555);
numbers[1] = 333;
console.log(numbers);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}

const student = { roll: 101, name: 'mofij', job: 'intern' };
student.nmae = 'Mofazzol';
// student = {name:'karim'}; //not allowed