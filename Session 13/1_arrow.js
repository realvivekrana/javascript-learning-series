//Arrow function

const welcome = ()=> console.log("Welcome Function");

const add = (num1, num2)=> num1+num2;

const fullname = (firstname, lastname) => `Welcome ${firstname} ${lastname}`;

const calculate = (n1, n2) =>{
    const add = n1+n2;
    const mul = n1*n2;
    return add+mul;
}

welcome();
console.log('Addition: '+add(12,23));
console.log('Full Name: '+fullname('Vivek', 'Rana'));
console.log('Calculate: '+calculate(2,3));