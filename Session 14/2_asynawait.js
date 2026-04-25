const fetchData = async () => {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/photos");
        const data = await resp.json();
        console.log("PHOTOS:", data);
    } catch (err) {
        console.log(err);
    }
}

const getTodos = async () => {
    try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await resp.json();
        console.log("TODO:", data);
    } catch (err) {
        console.log(err);
    }
}

fetchData();
getTodos();