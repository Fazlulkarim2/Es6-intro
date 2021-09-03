let priyoPerson = 'kulsum Begum';
priyoPerson = 'Momotaj Begum';
console.log(priyoPerson);
const hubby = 'Akber the great';


// default parameter 
function calculate(x, y, z = 1) {

}
function getName(first, last = 'khan') {
    return first + ' ' + last;
}

// template string 
const myPeople = `My lovely person is people are ${hubby}  and His fullName is ${getName('Akber')}.My name is ${priyoPerson}`;
console.log(myPeople);

// arrow function 
const getName2 = (first, last) => first + ' ' + last;
const fiveTimes = x => s * 5;
const bigArrowFunc = (x, y, z) => {
    const firstPart = x + y;
    const secondPart = y * z;
    const thirdPart = x / z;
    const result = (firstPart + secondPart) * thirdPart;
    return result;

}
// const numbbers = [56, 888, 687, 9]
// const max = Math.min(...numbers);
