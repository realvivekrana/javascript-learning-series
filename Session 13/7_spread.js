let arr1 = [1,2,3,4,5];

const arr2 = [6,7,8,9];

// const arr3 = arr1.concat(arr2);

const arr3 = [...arr1,...arr2];

const arr4 = [...arr1,...arr2,10, 11, 12];

console.log(arr3);
console.log(arr4);

const obj1 = {id:1, name:'Vivek'};
const obj2 = {email:'vivekrana.personal.com', country:'India'};

let usser = {...obj1,...obj2}; //merging object
console.log(usser);
usser = {...usser,country:'Canada'}; //updating object
console.log(usser);
usser = {...usser,password:'Vivek@123'};
console.log(usser);