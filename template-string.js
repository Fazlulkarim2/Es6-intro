const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukho chino";
const kobita = `kobita tumi sopno charini;`
const multiline = 'this is my first line \n' +
    'this is my second line \n' +
    'this is myy third line'
// console.log(multiline);

const multilineNew = `this is fiirst line.
this is second line. 
this is third line.
`
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">friend-5</h3>'
const old2 = '<h3 class="friend-name">friend-' + count + '</h3>';
const old2 = `<h3 class="friend-name">friend-${count}}</h3>`;
const new1 = `<h3 class="friend-name">friend-${friends.length}</h3>`;
console.log(new1);
const first = 'mamun';
const last = 'Chowdhury'
const fullOld = 'this person name is ' + first + ' ' + last;
const fullNew = `this person name is : ${first}  ${last} has money ${friends.length * 500}. He lives in Dhaka.`;
console.log(fullNew);
