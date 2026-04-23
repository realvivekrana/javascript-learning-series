let pattern = new RegExp("9876[0-9]{7}");

console.log(pattern.test("9856989956")); // false
console.log(pattern.test("9876989956")); // true
console.log(pattern.test("9456989956")); // false

let phone = new RegExp("[6-9]{3}-[0-9]{3}-[0-9]{4}");

console.log(phone.test("978-656-234"));   // false
console.log(phone.test("678-656-2345"));  // true
console.log(phone.test("345-656-2345"));  // false