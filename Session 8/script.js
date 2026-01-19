let todos = []; // Created Empty Array

function addTodo(task){
    todos.push(task); // add item in array
}

function removeTodo(task){
    todos = todos.filter(function(item){
        return item !== task;
    });
}

function display(){
    console.log(todos);
}
