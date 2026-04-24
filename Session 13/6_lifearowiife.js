(()=>{
        let count = 0;

        const increment=()=>{
            count++;
            console.log(`Counter: ${count}`);
        }
        const decreament=()=>{
            count--;
            console.log(`Counter: ${count}`);
        }
        console.log(count);
        increment();
        decreament();
    })();