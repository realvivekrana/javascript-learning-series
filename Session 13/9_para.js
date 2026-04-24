function test (para1, para2, ...para3){
    console.log(para1);
    console.log(para2);
    console.log(para3);
}
test(1,2,3);
test(1,2,3,4,5);
test(1,2,3,4,5,6,7,8);
//rest parameter must keep in last
//default and rest also not suggested to use together
//you can only use in those cases where you want to pass nothing to default

function check(greeting = 'Hello', ...names){
    console.log(greeting+ " " + names);
}
check();
check("Test","Test1","Test2")


function displayInfo(name="Guest", ...hobbies){
    console.log("Name: "+name);
    console.log("Hobbies: "+hobbies.join(","));
}
displayInfo();
displayInfo("Vivek","Programming","Reading");
displayInfo("Alex","Drawing","Painting","Reading","Driving");